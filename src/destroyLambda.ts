import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
var fs = require("fs");
var fse = require("fs-extra");
var enviroment = enviromentConfig[enviromentConfig.activeprofile];

var deleteStackLambda = () => {
  var pathFunctionsFiles = `./${enviromentConfig.generator.proyectName}_lambdas`;
  fs.readdir(pathFunctionsFiles, async function (err, files) {
    if (err) {
      console.error("ERROR READING FILES OF DIRECTORY ", pathFunctionsFiles);
      console.error(`Error trace: `, err);
      return;
    }
    var getResources = `aws apigateway get-resources --rest-api-id ${enviroment.lambda.apigatewayCrud.id}`;
    var resources: any = await executeCMD(getResources);
    var AGresources = JSON.parse(resources.stdout);
    files.forEach(async (file) => {
      var funcName = `${enviromentConfig.generator.proyectName}_${file}`;
      var deleteFunc = `aws lambda delete-function --function-name ${funcName}`;
      await executeCMD(deleteFunc);
    });
    AGresources.items.forEach(async (resource) => {
      if (resource.id !== enviroment.lambda.apigatewayCrudRoot) {
        var deleteResources = `aws apigateway delete-resource --rest-api-id ${enviroment.lambda.apigatewayCrud.id} --resource-id ${resource.id}`;
        await executeCMD(deleteResources);
      }
    });
  });
};
deleteStackLambda();
