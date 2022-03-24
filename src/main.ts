import enviromentConfig from "./configuration";
let argv = require("minimist")(process.argv.slice(2));
import genInitProcess from "./index";
import genBusiness from "./generateBusiness";
import deployLayer from "./deployLayer";
// import deployBusiness from "./deployLBusiness";
let profile = "dev";
if (argv.env) {
  profile = argv.env;
}
var env = enviromentConfig[profile];

const build = async () => {
  if (env) {
    console.log(`---------- CURRENT CONFIG ${profile.toUpperCase()}----------`);
    console.log(JSON.stringify(env, null, 2));
    console.log("---------- GENERATION PROCESS ----------");
    // await genInitProcess(env);
    console.log("---------- GENERATION BUSINESS ----------");
    // await genBusiness(env);
    console.log("---------- DEPLOY LAYER ----------");
    await deployLayer(env, profile);
    console.log("---------- DEPLOY SERVERLESS BUSINESS ----------");
    // await deployBusiness(env, profile);
    console.log("---------- DEPLOY LAMBDA ----------");
  } else {
    console.error(`No profile found: ${profile}`);
  }
};
build();
