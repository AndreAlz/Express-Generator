import enviromentConfig from "./configuration";
import {
  creatorDirectories,
  moveFiles,
  readFolderContent,
  creatorTemplate,
  copyTemplate,
  creatoServer,
  creatorSecurityPath,
} from "./utilities/files.manager";
import { getConnection } from "./utilities/database.manager";
import { monolithWD } from "./templates/monolith/workspace/workdirectories";
import { ModelGeneratorDto } from "./utilities/dto/ModelGeneratorDto";
import { TemplateDto } from "./utilities/dto/TemplateConfigDto";
import { CopyTemplateDto } from "./utilities/dto/CopyTemplateDto";

var enviroment = enviromentConfig[enviromentConfig.activeprofile];

const main = async () => {
  if (enviromentConfig.generator.monolith.active) {
    /* CRAER LOS DIRECTORIOS */
    creatorDirectories(monolithWD);
    /* GENERAR LOS MODELOS */
    await enviromentConfig.generator.commnads.models(
      new ModelGeneratorDto(
        enviroment.dbconfig.type,
        enviroment.dbconfig.host,
        enviroment.dbconfig.database,
        enviroment.dbconfig.port,
        enviroment.dbconfig.username,
        enviroment.dbconfig.password,
        enviroment.dbconfig.schema,
      ),
    );

    /* MOVER LOS MODELOS A LA WD*/
    let modelsEntityPath: string = "./models/entities";
    let entityPath: string = `./${enviromentConfig.generator.proyectName}/src/entity`;
    await moveFiles(modelsEntityPath, entityPath);

    /* CONECTAR A LA BASE DE DATOS */
    var configuration = enviroment.dbconfig;
    configuration.entities = [`${entityPath}/**/*.ts`];

    console.log(configuration);
    let conn = await getConnection(configuration);
    /* GENERAR ARCHIVOS EN BASE A LOS TEMPLATES */
    let files: Array<string> = readFolderContent(entityPath);
    let arrImportRest: string = "";
    let arrInstanceRest: string = "";
    let securityPath: string = "";
    let securityRoles: string = "";
    enviromentConfig.generator.monolith.roles.forEach((r) => {
      if (securityRoles === "") {
        securityRoles = `${securityRoles} "${r}"`;
      } else {
        securityRoles = `${securityRoles} , "${r}"`;
      }
    });
    let baseTemplates = "./src/templates/monolith/files";

    for (let i = 0; i < files.length; i++) {
      let entity: string = files[i].split(".ts")[0];
      /* PREPARAMOS IMPORTS DEL LOS REST */
      arrImportRest =
        arrImportRest + `import ${entity}Rest from "./rest/${entity}Rest";\n`;
      arrInstanceRest = arrInstanceRest + `new ${entity}Rest(),`;

      /* PREAPARAMOS SECURITY PATHS */

      securityPath =
        securityPath +
        `"/${entity}/findall": [${securityRoles}],\n
        "/${entity}/find": [${securityRoles}],\n
        "/${entity}/create": [${securityRoles}],\n
        "/${entity}/save": [${securityRoles}],\n
        "/${entity}/createall": [${securityRoles}],\n
        "/${entity}/saveall": [${securityRoles}],\n
        "/${entity}/delete": [${securityRoles}],\n
        `;
      /* OBTENEMOS METADATA */
      let metadata = conn.getMetadata(entity);
      let configurationService: Array<TemplateDto> = [];
      /* OBTENEMOS LAS PRIMARI KEYS */
      let columns = metadata.ownColumns;
      columns.forEach((c) => {
        if (c.isPrimary) {
          configurationService.push(
            new TemplateDto(
              "%GENERATION_ID_UUID%",
              c.propertyName,
              c.isPrimary,
              c.type.toString(),
              c.isGenerated,
              false,
            ),
          );
        }
      });
      /* OBTENEMOS LAS RELACIONES */
      var relations = metadata.ownRelations;
      let filterService = { relations: [] };
      relations.forEach((r) => {
        filterService.relations.push(r.propertyName);
      });

      configurationService.push(
        new TemplateDto(
          "%FILTER_FIND_OPTION%",
          JSON.stringify(filterService),
          false,
          null,
          false,
          true,
        ),
      );
      /*GENERAMOS LOS REPOSITORIOS */
      let repositorioTemplatePath = `${baseTemplates}/EntityRepository.txt`;
      let repositorioTargetPath = `./${enviromentConfig.generator.proyectName}/src/repository`;
      creatorTemplate(
        repositorioTemplatePath,
        repositorioTargetPath,
        entity,
        "Repository",
      );
      /*GENERAMOS LOS SERVICES */
      let serviceTemplatePath = `${baseTemplates}/EntityService.txt`;
      let serviceTargetPath = `./${enviromentConfig.generator.proyectName}/src/service`;
      creatorTemplate(
        serviceTemplatePath,
        serviceTargetPath,
        entity,
        "Service",
        configurationService,
      );
      /*GENERAMOS LOS REST */
      let restTemplatePath = `${baseTemplates}/EntityRest.txt`;
      let restTargetPath = `./${enviromentConfig.generator.proyectName}/src/rest`;
      creatorTemplate(restTemplatePath, restTargetPath, entity, "Rest");

      /* COPIAMOS ARCHIVOS UTILITARIOS */

      let utilFilesArr: Array<CopyTemplateDto> = [
        new CopyTemplateDto(
          `${baseTemplates}/App.txt`,
          `./${enviromentConfig.generator.proyectName}/src`,
          "App",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/ConfigFile.txt`,
          `./${enviromentConfig.generator.proyectName}/src`,
          "config",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/LoggerMiddleware.txt`,
          `./${enviromentConfig.generator.proyectName}/src/middleware`,
          "logger",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/SecurityMiddleware.txt`,
          `./${enviromentConfig.generator.proyectName}/src/middleware`,
          "security",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/iControllerBase.txt`,
          `./${enviromentConfig.generator.proyectName}/src/framework`,
          "IControllerBase.interface",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/NpmPackage.txt`,
          `./${enviromentConfig.generator.proyectName}`,
          "package",
          "json",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/TsConfig.txt`,
          `./${enviromentConfig.generator.proyectName}`,
          "tsconfig",
          "json",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/dto/SignInDto.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business/dto`,
          "SignInDto",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/dto/TokenDataDto.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business/dto`,
          "TokenDataDto",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/dto/SignUpDto.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business/dto`,
          "SignUpDto",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/security/SecurityRest.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business/security`,
          "SecurityRest",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/security/SecurityService.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business/security`,
          "SecurityService",
          "ts",
        ),
        new CopyTemplateDto(
          `${baseTemplates}/business/businessroutes.txt`,
          `./${enviromentConfig.generator.proyectName}/src/business`,
          "businessroutes",
          "ts",
        ),
      ];
      copyTemplate(utilFilesArr);
    }
    console.log(securityPath);
    creatoServer(
      `${baseTemplates}/server.txt`,
      `./${enviromentConfig.generator.proyectName}/src`,
      arrImportRest,
      arrInstanceRest,
      "server",
    );
    creatorSecurityPath(
      `${baseTemplates}/SecurityPaths.txt`,
      `./${enviromentConfig.generator.proyectName}/src`,
      securityPath,
      "securitypath",
    );
    conn.close();
  }

  if (enviromentConfig.generator.lambda.active) {
    //TODO
  }
};
main();