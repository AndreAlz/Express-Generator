var fs = require("fs");
var fse = require("fs-extra");
import { executeCMD } from "../utils/commands";

//INFORMACION ARN ROLE
var arnLambda = "arn:aws:iam::715111227541:role/lambda_role";
//ARN LAYER
var arnLayer = "arn:aws:lambda:us-east-2:715111227541:layer:sstCommons";
var versiontLayer = "4";
//API GATEWAY JSON
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
//ROOT RESOURCE
var apiGatewayRoot = "kzxd8754dc";
//function prefix
var prefix = "sst";

// var stages = {
//   deploymentId: "vdzn2x",
//   stageName: "iprovider_saas_crud",
//   cacheClusterEnabled: false,
//   cacheClusterStatus: "NOT_AVAILABLE",
//   methodSettings: {},
//   tracingEnabled: false,
//   createdDate: "2021-04-05T18:41:56-05:00",
//   lastUpdatedDate: "2021-04-09T12:37:48-05:00",
// };
var pathFunctionsFiles = "./lambdas/functions/";
let arrayReponse = [];
var arrrayFilesNames = [];
// var executeCMD = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(command, (err, stdout, stderr) => {
//       if (err) {
//         console.error("ERROR executeCMD:");
//         console.error(`Error executing command line ${command}`);
//         console.error(`Error trace: `, err);
//         reject(err);
//         return;
//       } else {
//         console.log(`RESULT OF COMMNAD ${command}:`);
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//         resolve({ stdout, stderr });
//       }
//     });
//   });
// };
var deployer = () => {
  fs.readdir(pathFunctionsFiles, async (err, files) => {
    if (err) {
      console.error("ERROR READING FILES OF DIRECTORY ", pathFunctionsFiles);
      console.error(`Error trace: `, err);
      return;
    } else {
      for (var i = 0; i < files.length; i++) {
        var funcName = files[i];
        var zipCommnad = `7z a -r ${pathFunctionsFiles}/${funcName}//index.zip  ${pathFunctionsFiles}/${funcName}//* `;
        await executeCMD(zipCommnad);
      }

      for (var j = 0; j < files.length; j++) {
        var funcName = files[j];
        var awsCommand = `aws lambda create-function --function-name ${prefix}_${funcName} --handler index.handler --runtime nodejs14.x --role ${arnLambda} --layers ${arnLayer}:${versiontLayer} --memory-size 250 --timeout 250  --zip-file fileb://${pathFunctionsFiles}/${funcName}//index.zip`;
        var lambdaResult: any = await executeCMD(awsCommand);
        lambdaResult = JSON.parse(lambdaResult.stdout);
        var awsRecurso = `aws apigateway create-resource --rest-api-id ${apiGateway.id} --parent-id ${apiGatewayRoot} --path-part ${funcName}`;
        var recursoResult: any = await executeCMD(awsRecurso);
        recursoResult = JSON.parse(recursoResult.stdout);
        var awsMethod = `aws apigateway put-method --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --authorization-type "NONE" `;
        var methodResult: any = await executeCMD(awsMethod);

        var awsLambdaPermission = `aws lambda add-permission --function-name ${prefix}_${funcName} --statement-id apigateway-get --action lambda:InvokeFunction --principal apigateway.amazonaws.com --source-arn arn:aws:execute-api:${
          lambdaResult.FunctionArn.split(":")[3]
        }:${lambdaResult.FunctionArn.split(":")[4]}:${
          apiGateway.id
        }/*/POST/${funcName}`;
        await executeCMD(awsLambdaPermission);
        var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --type AWS  --integration-http-method POST --uri arn:aws:apigateway:us-east-2:lambda:path/2015-03-31/functions/${lambdaResult.FunctionArn}/invocations`;
        var integreateResult: any = await executeCMD(awsIntegrate);
        var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true" --response-models  file://headerTemplate.json`;

        await executeCMD(awsMethodReponse);
        var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --selection-pattern ""  --response-parameters  file://headersParametres.json --response-templates file://headerTemplate2.json`;
        await executeCMD(awsInteReponse);

        var awsMethod = `aws apigateway put-method --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --authorization-type "NONE" `;
        var methodResult: any = await executeCMD(awsMethod);
        var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --type MOCK  --integration-http-method OPTIONS --request-templates file://responseTempalte.json `;
        var integreateResult: any = await executeCMD(awsIntegrate);
        var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true,method.response.header.Access-Control-Allow-Methods=true,method.response.header.Access-Control-Allow-Headers=true" --response-models file://headerTemplate.json`;
        await executeCMD(awsMethodReponse);
        var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --selection-pattern ""  --response-parameters  file://headersParametres1.json --response-templates file://headerTemplate2.json`;
        await executeCMD(awsInteReponse);
      }
    }
  });
};
deployer();

// const generateZip = () => {
//   var path = "./lambdas/";
//   fs.readdir(path, async function (err, files) {
//     if (err) {
//       console.error("ERROR READING FILES OF DIRECTORY ", path);
//       console.error(`Error trace: `, err);
//       return;
//     } else {
//       for (var i = 0; i < files.length; i++) {
//         var funcName = files[i];
//         var zipCommnad = `7z a -r ${path}/${funcName}//index.zip  ${path}/${funcName}//* `;
//         await executeCMD(zipCommnad);
//       }
//       for (var j = 0; j < files.length; j++) {
//         var funcName = files[j];

//         var awsCommand = `aws lambda create-function --function-name iprovider_saas_${funcName} --handler index.handler --runtime nodejs14.x --role ${arnLambda} --layers arn:aws:lambda:us-east-2:432499991508:layer:iProviderCommons:7 --memory-size 250 --timeout 250  --zip-file fileb://${path}/${funcName}//index.zip`;
//         var lambdaResult: any = await executeCMD(awsCommand);
//         lambdaResult = JSON.parse(lambdaResult.stdout);
//         var awsRecurso = `aws apigateway create-resource --rest-api-id ${apiGateway.id} --parent-id ${apiGatewayRoot} --path-part ${funcName}`;
//         var recursoResult: any = await executeCMD(awsRecurso);
//         recursoResult = JSON.parse(recursoResult.stdout);
//         var awsMethod = `aws apigateway put-method --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --authorization-type "NONE" `;
//         var methodResult: any = await executeCMD(awsMethod);

//         var awsLambdaPermission = `aws lambda add-permission --function-name iprovider_saas_${funcName} --statement-id apigateway-get --action lambda:InvokeFunction --principal apigateway.amazonaws.com --source-arn arn:aws:execute-api:${
//           lambdaResult.FunctionArn.split(":")[3]
//         }:${lambdaResult.FunctionArn.split(":")[4]}:${
//           apiGateway.id
//         }/*/POST/${funcName}`;
//         await executeCMD(awsLambdaPermission);
//         var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --type AWS  --integration-http-method POST --uri arn:aws:apigateway:us-east-2:lambda:path/2015-03-31/functions/${lambdaResult.FunctionArn}/invocations`;
//         var integreateResult: any = await executeCMD(awsIntegrate);
//         var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true" --response-models  file://headerTemplate.json`;

//         await executeCMD(awsMethodReponse);
//         var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --selection-pattern ""  --response-parameters  file://headersParametres.json --response-templates file://headerTemplate2.json`;
//         await executeCMD(awsInteReponse);

//         var awsMethod = `aws apigateway put-method --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --authorization-type "NONE" `;
//         var methodResult: any = await executeCMD(awsMethod);
//         var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --type MOCK  --integration-http-method OPTIONS --request-templates file://responseTempalte.json `;
//         var integreateResult: any = await executeCMD(awsIntegrate);
//         var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true,method.response.header.Access-Control-Allow-Methods=true,method.response.header.Access-Control-Allow-Headers=true" --response-models file://headerTemplate.json`;
//         await executeCMD(awsMethodReponse);
//         var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${apiGateway.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --selection-pattern ""  --response-parameters  file://headersParametres1.json --response-templates file://headerTemplate2.json`;
//         await executeCMD(awsInteReponse);
//       }
//     }
//   });
// };

// generateZip();
