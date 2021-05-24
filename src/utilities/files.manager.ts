import { stringify } from "querystring";
import { CopyTemplateDto } from "./dto/CopyTemplateDto";
import { TemplateDto } from "./dto/TemplateConfigDto";

const fs = require("fs");
const fse = require("fs-extra");

export const creatorDirectories = (folders: Array<string>): void => {
  folders.forEach((folder) => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  });
};

export const copyTemplate = (fileList: Array<CopyTemplateDto>) => {
  fileList.forEach((f) => {
    let template = fs.readFileSync(f.path, "utf8");
    fs.writeFileSync(`${f.target}/${f.name}.${f.ext}`, template);
  });
};

export const creatoServer = (
  templatePath: string,
  targetPath: string,
  imports: string,
  instances: string,
  name: string,
) => {
  let template = fs.readFileSync(templatePath, "utf8");
  template = template.replace(/%REST_IMPORTS%/g, imports);
  template = template.replace(/%REST_INSTANCES%/g, instances);
  fs.writeFileSync(`${targetPath}/${name}.ts`, template);
};

export const creatorSecurityPath = (
  templatePath: string,
  targetPath: string,
  paths: string,
  name: string,
) => {
  let template = fs.readFileSync(templatePath, "utf8");
  template = template.replace(/%SECURITY_PATH%/g, paths);
  fs.writeFileSync(`${targetPath}/${name}.ts`, template);
};

export const creatorTemplate = (
  templatePath: string,
  targetPath: string,
  entityName: string,
  sufix: string,
  configurations?: Array<TemplateDto>,
): void => {
  let template = fs.readFileSync(templatePath, "utf8");
  template = template.replace(/%ENTITY_NAME%/g, entityName);

  if (configurations) {
    configurations.forEach((c) => {
      if (c.isPrimary) {
        if (!c.isGenerated) {
          if (c.type !== "character varying") {
            throw Error(
              "GENERATION OF ID ARE WITH UUID PROTOCOL PLEASE AUTO GENERATE WITH SERIALS O IDENTITY CONSTRAINTS",
            );
          } else {
            template = template.replace(
              /%GENERATION_ID_UUID%/g,
              `bean.${c.value} = uuidv4();`,
            );
          }
        }
      } else if (c.isRelation) {
        template = template.replace(/%FILTER_FIND_OPTION%/g, c.value);
      }
    });
  }
  fs.writeFileSync(`${targetPath}/${entityName}${sufix}.ts`, template);
};

export const readFolderContent = (path: string): Array<string> => {
  let files = fs.readdirSync(path);
  return files;
};

export const moveFiles = (
  originPath: string,
  targetPath: string,
): Promise<any> => {
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
