var fs = require("fs");
var fse = require("fs-extra");
import { executeCMD } from "../utils/commands";
var prefix = "sst";
var apiGateway = {
  id: "gvdw6jxuia",
  name: "sst_api",
  createdDate: "2021-04-23T12:17:01-05:00",
  apiKeySource: "HEADER",
  endpointConfiguration: {
    types: ["REGIONAL"],
  },
  tags: {},
};
var apiGatewayRoot = "kzxd8754dc";
var deleteStackLambda = () => {
  var pathFunctionsFiles = "./lambdas/functions/";
  fs.readdir(pathFunctionsFiles, async function (err, files) {
    if (err) {
      console.error("ERROR READING FILES OF DIRECTORY ", pathFunctionsFiles);
      console.error(`Error trace: `, err);
      return;
    }
    var getResources = `aws apigateway get-resources --rest-api-id ${apiGateway.id}`;
    var resources: any = await executeCMD(getResources);
    var AGresources = JSON.parse(resources.stdout);
    files.forEach(async (file) => {
      var funcName = `${prefix}_${file}`;
      var deleteFunc = `aws lambda delete-function --function-name ${funcName}`;
      await executeCMD(deleteFunc);
    });
    AGresources.items.forEach(async (resource) => {
      if (resource.id !== apiGatewayRoot) {
        var deleteResources = `aws apigateway delete-resource --rest-api-id ${apiGateway.id} --resource-id ${resource.id}`;
        await executeCMD(deleteResources);
      }
    });
  });
};
deleteStackLambda();
