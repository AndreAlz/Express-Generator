import { executeCMD } from "../utils/commands";
import {
  workspace,
  moveFiles,
  readFiles,
  createLambdas,
  createRepository,
  createService,
  createRest,
  createServer,
} from "../utils/filemanage";
import { getConnection } from "../utils/database";
import * as fs from "fs";
import * as fse from "fs-extra";

import * as dotenv from "dotenv";
import * as customenv from "custom-env";
const mainProcess = async (conf) => {
  dotenv.config();
  customenv.env(conf.env);
  let generateEntitiesCommnad = `((rm -r output/ || true) && typeorm-model-generator -h ${process.env.CONNHOST} -d ${process.env.CONNDB} -u ${process.env.CONNUSER} -x ${process.env.CONNPW} -s ${process.env.CONNSHEMA} -e ${process.env.CONNTYPE})`;
  await executeCMD(generateEntitiesCommnad);
  var databaseconfig: any = {
    type: process.env.CONNTYPE,
    host: process.env.CONNHOST,
    schema: process.env.CONNSHEMA,
    port: parseInt(process.env.CONNPORT),
    username: process.env.CONNUSER,
    password: process.env.CONNPW,
    connectTimeoutMS: 100000,
    database: process.env.CONNDB,
    entities: [`./generated/src/entity/**/*.ts`],
  };
  console.log(databaseconfig);
  // let conn = await getConnection(databaseconfig);
  if (conf.monolith) {
    await monolithCreator(databaseconfig, conf);
  }
  if (conf.lambdas) {
    await lambdaCreator(databaseconfig, conf);
  }
};

const monolithCreator = async (dbConfig, conf) => {
  dbConfig.name = "monolithConn";
  workspace(conf.monolithWS);
  let originPath = "./output/entities";
  let targetPath = "./generated/src/entity";
  await moveFiles(originPath, targetPath);
  let templateRepositoryPath = "./templates/monolith/EntityRepository.txt";
  let repositoryPath = conf.monolithWS[5];
  let templateRepository = fs.readFileSync(templateRepositoryPath, "utf8");
  let templateServicePath = "./templates/monolith/EntityService.txt";
  let servicePath = conf.monolithWS[6];
  let templateService = fs.readFileSync(templateServicePath, "utf8");
  let templateRestPath = "./templates/monolith/EntityRest.txt";
  let restPath = conf.monolithWS[7];
  let templateRest = fs.readFileSync(templateRestPath, "utf8");
  var serverFilePath = "./generated/src/server.ts";
  var templateServer = "./templates/monolith/server.txt";
  var file = "./generated/package.json";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/NpmPackage.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  var file = "./generated/tsconfig.json";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/TsConfig.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  var file = "./generated/src/framework/IControllerBase.interface.ts";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/iControllerBase.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  var file = "./generated/src/middleware/logger.ts";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/LoggerMiddleware.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  var file = "./generated/src/app.ts";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/App.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  fs.copyFile("./.env", "./generated/.env", (err) => {
    if (err) throw err;
  });
  fs.copyFile(`./.env.${conf.env}`, "./generated/.env.devlocal", (err) => {
    if (err) throw err;
  });
  let files = fs.readdirSync(targetPath);
  let conn = await getConnection(dbConfig);
  for (var i = 0; i < files.length; i++) {
    let entity = files[i];
    let name = entity.split(".ts")[0];
    let metadata = conn.getMetadata(name);
    let primary = null;
    if (metadata.primaryColumns.length === 0) {
      throw Error(`Entity ${name} has not any primary key`);
    } else if (metadata.primaryColumns.length > 10) {
      throw Error(
        `Entity ${name} has multiple primaries key, feature not supported`,
      );
    } else {
      primary = metadata.primaryColumns[0].propertyName;
      createRepository(name, repositoryPath, templateRepository);
      createService(name, servicePath, primary, templateService);
      createRest(name, restPath, templateRest);
      createServer(files, serverFilePath, templateServer);
    }
  }
  conn.close();
};

const lambdaCreator = async (dbConfig, conf) => {
  dbConfig.name = "lambdaConn";
  let targetPath = "./generated/src/entity";
  let templateLambdaPath = "./templates/lambdas/index.txt";
  let templateLambda = fs.readFileSync(templateLambdaPath, "utf8");
  let templateRepositoryPath = "./templates/monolith/EntityRepository.txt";
  let templateRepository = fs.readFileSync(templateRepositoryPath, "utf8");
  let templateServicePath = "./templates/monolith/EntityService.txt";
  let templateService = fs.readFileSync(templateServicePath, "utf8");
  let files = fs.readdirSync(targetPath);
  fs.mkdirSync("./lambdas");
  fs.mkdirSync("./lambdas/functions");
  fs.mkdirSync(`./lambdas/common`);
  fs.mkdirSync(`./lambdas/common/repository`);
  fs.mkdirSync(`./lambdas/common/service`);
  var importer = "";
  var exporter = "";
  var templateExporter = fs
    .readFileSync("./templates/lambdas/exporter.txt", "utf8")
    .toString();

  fse.copy("./generated/src/entity", `./lambdas/common/entity`, (err) => {
    if (err) return console.error(err);
  });
  var file = "./lambdas/common/package.json";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/monolith/NpmPackage.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  var file = "./lambdas/common/tsconfig.json";
  if (!fs.existsSync(file)) {
    var template = fs
      .readFileSync("./templates/lambdas/TsConfig.txt", "utf8")
      .toString();
    fs.writeFileSync(file, template);
  }
  let conn = await getConnection(dbConfig);
  for (var i = 0; i < files.length; i++) {
    let entity = files[i];
    let name = entity.split(".ts")[0];

    let metadata = conn.getMetadata(name);
    let primary = null;
    if (metadata.primaryColumns.length === 0) {
      throw Error(`Entity ${name} has not any primary key`);
    } else if (metadata.primaryColumns.length > 10) {
      throw Error(
        `Entity ${name} has multiple primaries key, feature not supported`,
      );
    } else {
      primary = metadata.primaryColumns[0].propertyName;
      createRepository(name, `./lambdas/common/repository`, templateRepository);
      createService(name, `./lambdas/common/service`, primary, templateService);
      var folderPath = `./lambdas/functions/${name}Func`;
      fs.mkdirSync(folderPath);
      var json = {
        type: process.env.CONNTYPE,
        host: process.env.CONNHOST,
        schema: process.env.CONNSHEMA,
        port: parseInt(process.env.CONNPORT),
        username: process.env.CONNUSER,
        password: process.env.CONNPW,
        connectTimeoutMS: 100000,
        database: process.env.CONNDB,
        entities: ["/opt/dist/entity/**/*.js"],
      };
      var tmp = templateLambda.replace(/dbConfigJson/g, JSON.stringify(json));
      tmp = tmp.replace(/entityname/g, name);
      fs.writeFileSync(`${folderPath}/index.js`, tmp);
    }
  }
  files.forEach((entity) => {
    var name = entity.split(".ts")[0];
    importer =
      importer +
      `import { ${name}Repository } from "./repository/${name}Repository";\n
         import { ${name}Service } from "./service/${name}Service";\n`;
    exporter =
      exporter +
      `${name}Repository: ${name}Repository, \n
        ${name}Service:${name}Service,`;
  });
  templateExporter = templateExporter.replace(/importsRepoService/g, importer);
  templateExporter = templateExporter.replace(/exporterRepoService/g, exporter);
  fs.writeFileSync("./lambdas/common/index.ts", templateExporter);
  conn.close();
};
export default mainProcess;
