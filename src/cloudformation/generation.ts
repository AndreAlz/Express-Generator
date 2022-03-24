import { readFolderContent } from "../utilities/files.manager";
import enviromentConfig from "../configuration";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";
import { executeCMD, executeDirCMD } from "../utilities/command.exec";

let fs = require("fs");

let cloudformation = async () => {
  try {
    let argv = require("minimist")(process.argv.slice(2));
    let profile = "dev";
    if (argv.env) {
      profile = argv.env;
    }
    let env = enviromentConfig[profile];
    let bucket = null;
    if (argv.bucket) {
      bucket = argv.bucket;
    } else {
      throw Error("BUCKET NAME NOT FOUND");
    }
    if (!fs.existsSync(`infrastructure_${profile}`)) {
      fs.mkdirSync(`infrastructure_${profile}`);
    }
    if (!fs.existsSync(`infrastructure_${profile}/yaml_${profile}`)) {
      fs.mkdirSync(`infrastructure_${profile}/yaml_${profile}`);
    }
    if (
      !fs.existsSync(`infrastructure_${profile}/yaml_${profile}/lambda_yaml`)
    ) {
      fs.mkdirSync(`infrastructure_${profile}/yaml_${profile}/lambda_yaml`);
    }
    if (
      !fs.existsSync(`infrastructure_${profile}/yaml_${profile}/business_yaml`)
    ) {
      fs.mkdirSync(`infrastructure_${profile}/yaml_${profile}/business_yaml`);
    }
    if (!fs.existsSync(`infrastructure_${profile}/code_${profile}`)) {
      fs.mkdirSync(`infrastructure_${profile}/code_${profile}`);
    }
    if (!fs.existsSync(`infrastructure_${profile}/code_${profile}/lambda`)) {
      fs.mkdirSync(`infrastructure_${profile}/code_${profile}/lambda`);
    }
    if (!fs.existsSync(`infrastructure_${profile}/code_${profile}/business`)) {
      fs.mkdirSync(`infrastructure_${profile}/code_${profile}/business`);
    }
    if (!fs.existsSync(`infrastructure_${profile}/code_${profile}/layer`)) {
      fs.mkdirSync(`infrastructure_${profile}/code_${profile}/layer`);
    }

    // Entity Directory in Monolith
    let entityPath: string = path.join(
      __dirname,
      `../../${enviromentConfig.generator.proyectName}/src/entity`,
    );
    //CloudFormation Lambda template YAML
    let lambdaTmpPath: string = path.join(
      __dirname,
      "/templates/CF_TMP_LAMBDA.txt",
    );
    //CloudFormation nested template YAML
    let nestedTmpPath: string = path.join(
      __dirname,
      "/templates/CF_TMP_NEST.txt",
    );
    //CloudFormation nested template YAML
    let rootTmpPath: string = path.join(
      __dirname,
      "/templates/CF_TMP_ROOT.txt",
    );
    //Lambdas Generated
    let lambdasPath: string = path.join(
      __dirname,
      `..//..//${enviromentConfig.generator.proyectName}_lambdas`,
    );
    //Business
    let businessPath: string = path.join(
      __dirname,
      `..//..//${enviromentConfig.generator.proyectName}_lambda_business`,
    );
    let pathProyect = path.join(
      __dirname,
      `..//..//${enviromentConfig.generator.proyectName}`,
    );
    await executeDirCMD("npm install", pathProyect);
    await executeDirCMD("npm run clear", pathProyect);
    await executeDirCMD("npm run build", pathProyect);
    let layerPrefix = uuidv4();
    let layerFileName = `${layerPrefix}_${enviromentConfig.generator.proyectName}`;
    let zipCommnad = `7z a -r ${layerFileName}.zip * `;
    await executeDirCMD(zipCommnad, pathProyect);
    let lambdasPrefix = uuidv4();
    //Zipping Lambdas
    let filesLambda = readFolderContent(lambdasPath);
    for (let i = 0; i < filesLambda.length; i++) {
      let funcName = filesLambda[i];
      let zipCommnad = `7z a -r ${lambdasPrefix}_${funcName}.zip *`;
      console.log(zipCommnad);
      await executeDirCMD(zipCommnad, `${lambdasPath}//${funcName}`);
    }
    let filesBusiness = readFolderContent(businessPath);
    for (let i = 0; i < filesBusiness.length; i++) {
      let funcName = filesBusiness[i];
      let zipCommnad = `7z a -r ${lambdasPrefix}_${funcName}.zip *`;
      console.log(zipCommnad);
      await executeDirCMD(zipCommnad, `${businessPath}//${funcName}`);
    }

    // move Files
    let moveCommnadLambda = `mv ${lambdasPath}//**//*.zip ${path.join(
      __dirname,
      `..//..//infrastructure_${profile}//code_${profile}//lambda`,
    )}`;
    await executeCMD(moveCommnadLambda);
    let moveCommnadBusiness = `mv ${businessPath}//**//*.zip ${path.join(
      __dirname,
      `..//..//infrastructure_${profile}//code_${profile}//business`,
    )}`;
    await executeCMD(moveCommnadBusiness);
    let moveCommandLayer = `mv ${pathProyect}//*.zip ${path.join(
      __dirname,
      `..//..//infrastructure_${profile}//code_${profile}//layer`,
    )}`;
    await executeCMD(moveCommandLayer);

    //Generating YAML templates
    let files: Array<string> = readFolderContent(entityPath);
    let templateLambda = fs.readFileSync(lambdaTmpPath, "utf8");
    let templateNested = fs.readFileSync(nestedTmpPath, "utf8");
    let total_nested = "\n";
    let total_depends = "\n";
    for (let i = 0; i < files.length; i++) {
      let entity: string = files[i].split(".ts")[0];
      //Generate LAMBDA templates
      let lambda: string = templateLambda.replace(
        /NESTED_NAME/g,
        `${entity}Func`,
      );
      lambda = lambda.replace(
        /LAMBDA_NAME/g,
        `${enviromentConfig.generator.proyectName}_${profile}_${entity}Func`,
      );
      lambda = lambda.replace(/BUCKET_NAME/g, bucket);
      lambda = lambda.replace(
        /BUCKET_FILE_KEY/g,
        `code_${profile}/lambda/${lambdasPrefix}_${entity}Func.zip`,
      );
      fs.writeFileSync(
        `${path.join(
          __dirname,
          `../../infrastructure_${profile}/yaml_${profile}/lambda_yaml/${entity}Func.yaml`,
        )}`,
        lambda,
      );
      //Generate NESTED templates
      let nested: string = templateNested.replace(/NESTED_NAME/g, entity);
      nested = nested.replace(
        /BUCKET_FILE/g,
        `yaml_${profile}/lambda_yaml/${entity}Func`,
      );
      nested = nested.replace(/BUCKET_NAME/g, bucket);
      total_nested = total_nested + "  " + nested + "\n";
      total_depends = total_depends + "        - " + entity + "\n";
    }
    let business: Array<string> = readFolderContent(businessPath);
    for (let i = 0; i < business.length; i++) {
      let entity: string = business[i];
      //Generate LAMBDA templates
      let lambda: string = templateLambda.replace(/NESTED_NAME/g, entity);
      lambda = lambda.replace(
        /LAMBDA_NAME/g,
        `${enviromentConfig.generator.proyectName}_${profile}_business_${entity}`,
      );
      lambda = lambda.replace(/BUCKET_NAME/g, bucket);
      lambda = lambda.replace(
        /BUCKET_FILE_KEY/g,
        `code_${profile}/business/${lambdasPrefix}_${entity}.zip`,
      );
      fs.writeFileSync(
        `${path.join(
          __dirname,
          `../../infrastructure_${profile}/yaml_${profile}/business_yaml/${entity}.yaml`,
        )}`,
        lambda,
      );
      //Generate NESTED templates
      let nested: string = templateNested.replace(/NESTED_NAME/g, entity);
      nested = nested.replace(
        /BUCKET_FILE/g,
        `yaml_${profile}/business_yaml/${entity}`,
      );
      nested = nested.replace(/BUCKET_NAME/g, bucket);
      total_nested = total_nested + "  " + nested + "\n";
      total_depends = total_depends + "        - " + entity + "\n";
    }

    //GENERATE ROOT YAML
    let templateRoot = fs.readFileSync(rootTmpPath, "utf8");
    let rootTmp = templateRoot.replace(
      /PROYECT_NAME/g,
      `${enviromentConfig.generator.proyectName}_${profile}`,
    );
    rootTmp = rootTmp.replace(
      /STAGE_NAME/g,
      `${enviromentConfig.generator.proyectName}`,
    );

    rootTmp = rootTmp.replace(/BUCKET_NAME/g, bucket);
    rootTmp = rootTmp.replace(/TOTAL_NESTED/g, total_nested);
    rootTmp = rootTmp.replace(/DEPENDESON/g, total_depends);
    rootTmp = rootTmp.replace(
      /BUCKET_FILE_KEY/g,
      `code_${profile}/layer/${layerFileName}.zip`,
    );
    rootTmp = rootTmp.replace(
      /LAYERNAME/g,
      `${enviromentConfig.generator.proyectName}_${profile}`,
    );
    fs.writeFileSync(
      `${path.join(
        __dirname,
        `../../infrastructure_${profile}/root.yaml`,
      )}`,
      rootTmp,
    );
    // Sync file to s3
    let s3Commnad = `aws s3 sync . s3://${bucket} --delete`;
    await executeDirCMD(
      s3Commnad,
      path.join(__dirname, `../../infrastructure_${profile}`),
    );
  } catch (error) {
    console.log("####### ERROR EXECUTING SERVICES #######");
    console.log(error.message);
  }
};

cloudformation();
