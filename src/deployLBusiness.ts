import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
var fs = require("fs");
var fse = require("fs-extra");
var enviroment = enviromentConfig[enviromentConfig.activeprofile];
const deployBusiness = () => {
  if (enviromentConfig.generator.lambda.active) {
    let pathFunctionsFilesBusiness = `./${enviromentConfig.generator.proyectName}_lambda_business`;
    fs.readdir(pathFunctionsFilesBusiness, async (err, filesList) => {
      for (var i = 0; i < filesList.length; i++) {
        var funcName = filesList[i];
        var zipCommnad = `7z a -r ${pathFunctionsFilesBusiness}/${funcName}//index.zip  ${pathFunctionsFilesBusiness}/${funcName}//* `;
        await executeCMD(zipCommnad);
      }
      for (var j = 0; j < filesList.length; j++) {
        var funcName = filesList[j];
        var awsCommand = `aws lambda create-function --function-name ${enviromentConfig.generator.proyectName}Business_${funcName} --handler index.handler --runtime nodejs14.x --role ${enviroment.lambda.roleArn} --layers ${enviroment.lambda.layerArn}:${enviroment.lambda.layerVersion} --memory-size ${enviroment.lambda.memorySize} --timeout ${enviroment.lambda.timeout}  --zip-file fileb://${pathFunctionsFilesBusiness}/${funcName}//index.zip`;
        var lambdaResult: any = await executeCMD(awsCommand);
        lambdaResult = JSON.parse(lambdaResult.stdout);
        var awsRecurso = `aws apigateway create-resource --rest-api-id ${enviroment.lambda.apigatewayBusiness.id} --parent-id ${enviroment.lambda.apigatewayRootBusiness} --path-part ${funcName}`;
        var recursoResult: any = await executeCMD(awsRecurso);
        recursoResult = JSON.parse(recursoResult.stdout);
        var awsMethod = `aws apigateway put-method --rest-api-id  ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method POST --authorization-type "NONE" `;
        var methodResult: any = await executeCMD(awsMethod);

        var awsLambdaPermission = `aws lambda add-permission --function-name ${
          enviromentConfig.generator.proyectName
        }Business_${funcName} --statement-id apigateway-get --action lambda:InvokeFunction --principal apigateway.amazonaws.com --source-arn arn:aws:execute-api:${
          lambdaResult.FunctionArn.split(":")[3]
        }:${lambdaResult.FunctionArn.split(":")[4]}:${
          enviroment.lambda.apigatewayBusiness.id
        }/*/POST/${funcName}`;
        await executeCMD(awsLambdaPermission);
        var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method POST --type AWS  --integration-http-method POST --uri arn:aws:apigateway:us-east-2:lambda:path/2015-03-31/functions/${lambdaResult.FunctionArn}/invocations`;
        var integreateResult: any = await executeCMD(awsIntegrate);
        console.log("FILETEST");
        var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true" --response-models  file://src/templates/lambda/config/headerTemplate.json`;
        console.log("FILETEST");
        await executeCMD(awsMethodReponse);
        var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method POST --status-code 200 --selection-pattern ""  --response-parameters  file://src/templates/lambda/config/headersParameters.json --response-templates file://src/templates/lambda/config/headerTemplate2.json`;
        await executeCMD(awsInteReponse);

        var awsMethod = `aws apigateway put-method --rest-api-id  ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method OPTIONS --authorization-type "NONE" `;
        var methodResult: any = await executeCMD(awsMethod);
        var awsIntegrate = `aws apigateway put-integration --rest-api-id  ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method OPTIONS --type MOCK  --integration-http-method OPTIONS --request-templates file://src/templates/lambda/config/responseTempalte.json `;
        var integreateResult: any = await executeCMD(awsIntegrate);
        var awsMethodReponse = `aws apigateway put-method-response --rest-api-id ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --response-parameters "method.response.header.Access-Control-Allow-Origin=true,method.response.header.Access-Control-Allow-Methods=true,method.response.header.Access-Control-Allow-Headers=true" --response-models file://src/templates/lambda/config/headerTemplate.json`;
        await executeCMD(awsMethodReponse);
        var awsInteReponse = `aws apigateway put-integration-response --rest-api-id ${enviroment.lambda.apigatewayBusiness.id} --resource-id ${recursoResult.id} --http-method OPTIONS --status-code 200 --selection-pattern ""  --response-parameters  file://src/templates/lambda/config/headersParameters1.json --response-templates file://src/templates/lambda/config/headerTemplate2.json`;
        await executeCMD(awsInteReponse);
      }
    });
  }
};
deployBusiness();
