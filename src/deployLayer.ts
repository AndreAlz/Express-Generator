import { executeDirCMD, executeCMD } from "./utilities/command.exec";
import * as fs from "fs";
import * as path from "path";
import enviromentConfig from "./configuration";
let argv = require("minimist")(process.argv.slice(2));
let profile = "dev";
if (argv.env) {
  profile = argv.env;
}
var env = enviromentConfig[profile];
let deployLayer = (enviroment?: any, profile?: string) => {
  var pathFunctionsFiles = `../${enviromentConfig.generator.proyectName}`;
  var pathLambda = `./${enviromentConfig.generator.proyectName}`;
  let pathProyect = path.join(__dirname, pathFunctionsFiles);
  if (!fs.existsSync(pathProyect)) {
    throw Error("No proyect found");
  } else {
    console.log("INSTALLING DEPENDENCIES");
    executeDirCMD("npm install", pathProyect).then(() => {
      console.log("CLEAR PROYECT");
      executeDirCMD("npm run clear", pathProyect).then(() => {
        console.log("BUILDING PROYECT");
        executeDirCMD("npm run build", pathProyect).then(() => {
          var zipCommnad = `7z a -r dist.zip * `;
          console.log("ZIPPING PROYECT");
          executeDirCMD(zipCommnad, pathProyect).then(() => {
            console.log("DEPLOYING LAYER");
            var awsLayerCommnad = `aws lambda --region ${enviroment.lambda.region} publish-layer-version --layer-name ${enviroment.lambda.layerName}_${profile} --compatible-runtimes nodejs14.x --zip-file fileb://${pathLambda}//dist.zip `;
            executeCMD(awsLayerCommnad).then((res: any) => {
              let result = JSON.parse(res.stdout);
              console.log(
                `Layer deployed, change the layer version in the configuration file: LAYER VERSION ${result.Version}`,
              );
            });
          });
        });
      });
    });
  }
};
export default deployLayer;
if (env) {
  deployLayer(env);
} else {
  console.error(`No profile found: ${profile}`);
}
