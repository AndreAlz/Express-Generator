import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
var fs = require("fs");
var fse = require("fs-extra");
var enviroment = enviromentConfig[enviromentConfig.activeprofile];
const deployBusiness = () => {
  if (enviromentConfig.generator.lambda.active) {
    var pathFunctionsFiles = `./${enviromentConfig.generator.proyectName}/src/business/service`;
    fs.readdir(pathFunctionsFiles, async (err, files) => {
      if (err) {
        console.error("ERROR READING FILES OF DIRECTORY ", pathFunctionsFiles);
        console.error(`Error trace: `, err);
        return;
      } else {
        if (
          !fs.existsSync(
            `${enviromentConfig.generator.proyectName}_lambda_business`,
          )
        ) {
          fs.mkdirSync(
            `${enviromentConfig.generator.proyectName}_lambda_business`,
          );
        }
        for (var i = 0; i < files.length; i++) {
          let serviceName = files[i];
          let name = serviceName.split(".ts")[0];
          if (
            !fs.existsSync(
              `${enviromentConfig.generator.proyectName}_lambda_business/${name}Func`,
            )
          ) {
            fs.mkdirSync(
              `${enviromentConfig.generator.proyectName}_lambda_business/${name}Func`,
            );
          }
          let { lambdaconfig } = await import(
            `../${enviromentConfig.generator.proyectName}/src/business/service/${serviceName}`
          );
          let configService = lambdaconfig.call(null);
          var listActions = "";
          Object.keys(configService.method).forEach((k) => {
            let param = "";
            if (configService.method[k] === "body") {
              param = "body.payload";
            }
            if (configService.method[k] === "none") {
              param = "";
            }
            if (
              configService.method[k] !== "body" &&
              configService.method[k] !== "none"
            ) {
              if (Array.isArray(configService.method[k])) {
                configService.method[k].forEach((p) => {
                  param = param + `body.payload.${p},`;
                });
                param = param.slice(0, -1);
              } else {
                param = `body.payload.${configService.method[k]}`;
              }
            }
            let caseAction = `
            case "${k}":
              res.data = await service.${k}(${param});
              break;
            `;
            listActions = `${listActions}\n${caseAction}`;
          });
          let template = fs.readFileSync(
            "./src/templates/lambda/files/indexBusiness.txt",
            "utf8",
          );
          var configuration = enviroment.dbconfig;
          configuration.entities = ["/opt/dist/entity/**/*.js"];
          template = template.replace(/ServiceName/g, name);
          template = template.replace(/ActionLambda/g, listActions);
          template = template.replace(
            /dbConfigJson/g,
            JSON.stringify(configuration),
          );
          fs.writeFileSync(
            `./${enviromentConfig.generator.proyectName}_lambda_business/${name}Func/index.js`,
            template,
          );
        }
      }
    });
  }
};
deployBusiness();
