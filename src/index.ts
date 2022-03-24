import enviromentConfig from "./configuration";
import {
  creatorDirectories,
  moveFiles,
  readFolderContent,
  creatorTemplate,
  copyTemplate,
  creatoServer,
  creatorSecurityPath,
  creatorExporterTemplate,
  creatorLambdas,
} from "./utilities/files.manager";
import { getConnection } from "./utilities/database.manager";
import { monolithWD } from "./templates/monolith/workspace/workdirectories";
import { ModelGeneratorDto } from "./utilities/dto/ModelGeneratorDto";
import { TemplateDto } from "./utilities/dto/TemplateConfigDto";
import { CopyTemplateDto } from "./utilities/dto/CopyTemplateDto";
import { listAddColumns } from "./utilities/migration.manager";
let argv = require("minimist")(process.argv.slice(2));
let profile = "dev";
if (argv.env) {
  profile = argv.env;
}
var env = enviromentConfig[profile];

const main = async (enviroment?: any) => {
  // if (env) {
  //   enviroment = env;
  // }
  if (enviroment) {
    if (enviromentConfig.generator.monolith.audit) {
      /* CONECTAR A LA BASE DE DATOS */
      var configuration = enviroment.dbconfig;
      delete configuration.entities;
      let conn = await getConnection(configuration);
      /*CREAMOS EL QUERY BUILDER PARA EXTRAER LAS TABLAS */
      let queryRunner = conn.createQueryRunner();
      let queryTables = `select table_name from information_schema.tables where table_schema = '${configuration.schema}'`;
      let tablesNames = await conn.query(queryTables);
      let tables = tablesNames.map((t) => {
        return t.table_name;
      });
      let tableObjects = await queryRunner.getTables(tables);
      for (var i = 0; i < tableObjects.length; i++) {
        //Encontramos las lista de columns de auditoria que no estan creadas
        var t = tableObjects[i];
        var arrAddColumns = [];

        var createColumns = await listAddColumns(
          queryRunner,
          enviromentConfig.generator.audit.createColumns,
          t,
        );
        var updateColumns = await listAddColumns(
          queryRunner,
          enviromentConfig.generator.audit.updateColumns,
          t,
        );
        arrAddColumns = arrAddColumns
          .concat(updateColumns)
          .concat(createColumns);
        if (arrAddColumns.length > 0) {
          //Registramos las tablas de auditoria
          await queryRunner.addColumns(t, arrAddColumns);
        }
      }
      conn.close();
    }
    //if (enviromentConfig.generator.monolith.active) {
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
    let importer = "";
    let exporter = "";
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
              /%GENERATION_ID_UUID%/g,
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
          /%FILTER_FIND_OPTION%/g,
          JSON.stringify(filterService),
          false,
          null,
          false,
          true,
        ),
      );
      /*OBTENEMOS COLUMNAS DE AUDITORIA */
      if (enviromentConfig.generator.monolith.audit) {
        enviromentConfig.generator.audit.createColumns.forEach((c) => {
          var stringcode = "\n";
          if (c.isAutoGenerated) {
            if (c.columnType === "timestamp") {
              stringcode =
                stringcode + `bean.${c.propertyName} = new Date();\n`;
            }
            configurationService.push(
              new TemplateDto(
                /%CREATE_FIELDS%/g,
                stringcode,
                false,
                null,
                false,
                false,
              ),
            );
          }
        });
        enviromentConfig.generator.audit.updateColumns.forEach((c) => {
          var stringcode = "\n";

          if (c.isAutoGenerated) {
            if (c.columnType === "timestamp") {
              stringcode =
                stringcode + `bean.${c.propertyName} = new Date();\n`;
            }
            configurationService.push(
              new TemplateDto(
                /%UPDATE_FIELDS%/g,
                stringcode,
                false,
                null,
                false,
                false,
              ),
            );
          }
        });
      } else {
        configurationService.push(
          new TemplateDto(/%CREATE_FIELDS%/g, "", false, null, false, false),
        );
        configurationService.push(
          new TemplateDto(/%UPDATE_FIELDS%/g, "", false, null, false, false),
        );
      }

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
          "app",
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
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/SecurityMiddleware.txt`,
              `./${enviromentConfig.generator.proyectName}/src/middleware`,
              "security",
              "ts",
            )
          : null,
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
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/dto/SignInDto.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business/dto`,
              "SignInDto",
              "ts",
            )
          : null,
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/dto/TokenDataDto.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business/dto`,
              "TokenDataDto",
              "ts",
            )
          : null,
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/dto/SignUpDto.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business/dto`,
              "SignUpDto",
              "ts",
            )
          : null,
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/security/SecurityRest.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business/security`,
              "SecurityRest",
              "ts",
            )
          : null,
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/security/SecurityService.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business/security`,
              "SecurityService",
              "ts",
            )
          : null,
        enviromentConfig.generator.monolith.security
          ? new CopyTemplateDto(
              `${baseTemplates}/business/businessroutesSecurity.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business`,
              "businessroutes",
              "ts",
            )
          : new CopyTemplateDto(
              `${baseTemplates}/business/businessroutes.txt`,
              `./${enviromentConfig.generator.proyectName}/src/business`,
              "businessroutes",
              "ts",
            ),
      ];
      copyTemplate(utilFilesArr);
      //GENERATE IMPORTS AND EXPORTS
      importer =
        importer +
        `import { ${entity}Repository } from "./repository/${entity}Repository";\n
           import { ${entity}Service } from "./service/${entity}Service";\n`;
      exporter =
        exporter +
        `${entity}Repository: ${entity}Repository, \n
          ${entity}Service:${entity}Service,`;
    }
    let exporterTemplate = creatorExporterTemplate(
      `${baseTemplates}/exporter.txt`,
      importer,
      exporter,
      `./${enviromentConfig.generator.proyectName}/src`,
    );
    enviromentConfig.generator.monolith.security
      ? creatoServer(
          `${baseTemplates}/serverSecurity.txt`,
          `./${enviromentConfig.generator.proyectName}/src`,
          arrImportRest,
          arrInstanceRest,
          "server",
        )
      : creatoServer(
          `${baseTemplates}/server.txt`,
          `./${enviromentConfig.generator.proyectName}/src`,
          arrImportRest,
          arrInstanceRest,
          "server",
        );
    if (enviromentConfig.generator.monolith.security) {
      creatorSecurityPath(
        `${baseTemplates}/SecurityPaths.txt`,
        `./${enviromentConfig.generator.proyectName}/src`,
        securityPath,
        "securitypath",
      );
    }

    conn.close();
    //}

    if (enviromentConfig.generator.lambda) {
      //GENERATE LAMBDAS
      let baseTemplates = "./src/templates/lambda/files";
      /* GENERAR LOS MODELOS */
      let entityPath: string = `./${enviromentConfig.generator.proyectName}/src/entity`;
      let files: Array<string> = readFolderContent(entityPath);
      var configuration = enviroment.dbconfig;
      configuration.entities = ["/opt/dist/entity/**/*.js"];
      for (let i = 0; i < files.length; i++) {
        let entity: string = files[i].split(".ts")[0];
        creatorLambdas(
          `${baseTemplates}/index.txt`,
          `./${enviromentConfig.generator.proyectName}_lambdas`,
          entity,
          configuration,
        );
      }
    }
  } else {
    throw Error("No enviroment send");
  }
};
export default main;
if (env) {
  main(env);
} else {
  console.error(`No profile found: ${profile}`);
}
