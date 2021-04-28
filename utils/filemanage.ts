const fs = require("fs");
const fse = require("fs-extra");

export const workspace = (folders) => {
  folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  });
};

export const generateFile = (path, template) => {
  if (!fs.existsSync(path)) {
    var string = fs.readFileSync(template, "utf8").toString();
    fs.writeFileSync(path, string);
  }
};

export const cloneFile = (path, file) => {
  fs.copyFile(file, path, (err) => {
    if (err) throw err;
  });
};

export const readFiles = (path, callback) => {
  fs.readdir(path, function (err, files) {
    if (err) {
      console.error("ERROR READING FILES OF DIRECTORY ", path);
      console.error(`Error trace: `, err);
      return;
    } else {
      callback(files);
    }
  });
};

export const moveFiles = (originPath, targetPath) => {
  return new Promise((resolve, reject) => {
    fse.move(originPath, targetPath, { overwrite: true }, async (err) => {
      if (err) {
        reject({
          error: err,
        });
      } else {
        resolve({
          originPath,
          targetPath,
        });
      }
    });
  });
};

export const createRepository = (entity, repositoryPath, template) => {
  var tmp = template.replace(/entityname/g, entity);
  fs.writeFileSync(`${repositoryPath}/${entity}Repository.ts`, tmp);
};
export const createService = (entity, servicePath, primary, template) => {
  var tmp = template.replace(/entityname/g, entity);
  tmp = tmp.replace(/entityprimary/g, primary);
  fs.writeFileSync(`${servicePath}/${entity}Service.ts`, tmp);
};

export const createRest = (entity, restPath, template) => {
  var tmp = template.replace(/entityname/g, entity);
  fs.writeFileSync(`${restPath}/${entity}Rest.ts`, tmp);
};

export const createServer = (array, filePath, templatePath) => {
  let importsList = "";
  let intanceList = "";
  array.forEach((file) => {
    var name = file.split(".ts")[0];
    importsList =
      importsList + `import ${name}Rest from './rest/${name}Rest'; \n`;
    intanceList = intanceList + `new ${name}Rest(), \n`;
  });
  if (!fs.existsSync(filePath)) {
    var template = fs.readFileSync(templatePath, "utf8").toString();
    template = template.replace(/restimports/g, importsList);
    template = template.replace(/arrayinstances/g, intanceList);
    fs.writeFileSync(filePath, template);
  }
};

export const createLambdas = (list, callback) => {
  if (!fs.existsSync("./lambdas")) {
    fs.mkdirSync("./lambdas");
    fs.mkdirSync(`./lambdas/common`);
    fs.mkdirSync(`./lambdas/common/repository`);
    fs.mkdirSync(`./lambdas/common/service`);
    var importer = "";
    var exporter = "";
    var template = fs
      .readFileSync("./templates/lambdas/exporter.txt", "utf8")
      .toString();
    list.forEach((entity) => {
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
    template = template.replace(/importsRepoService/g, importer);
    template = template.replace(/exporterRepoService/g, exporter);
    fs.writeFileSync("./lambdas/common/index.ts", template);
    fse.copy("./generated/src/entity", `./lambdas/common/entity`, (err) => {
      if (err) return console.error(err);
    });
    var file = "./lambdas/common/package.json";
    if (!fs.existsSync(file)) {
      var template = fs
        .readFileSync("./templates/NpmPackage.txt", "utf8")
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
  }

  callback();
};
