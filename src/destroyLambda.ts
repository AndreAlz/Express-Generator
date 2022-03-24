import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
var fs = require("fs");
var fse = require("fs-extra");
let argv = require("minimist")(process.argv.slice(2));
let profile = "dev";
if (argv.env) {
  profile = argv.env;
}
var enviroment = enviromentConfig[profile];

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
      var funcName = `${enviromentConfig.generator.proyectName}_${profile}_${file}`;
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
var updateMethod = () => {
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
    for (let index = 0; index < AGresources.items.length; index++) {
      let resource = AGresources.items[index];
      if (resource.id !== enviroment.lambda.apigatewayCrudRoot) {
        var deleteResources = `aws apigateway update-method --rest-api-id ${enviroment.lambda.apigatewayCrud.id} --resource-id ${resource.id} --http-method POST --patch-operations file://src/templates/lambda/config/cognito.json`;
        await executeCMD(deleteResources);
      }
    }
  });
};

if (enviroment) {
  updateMethod();
} else {
  console.error(`No profile found: ${profile}`);
}
