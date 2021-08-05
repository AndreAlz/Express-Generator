import enviromentConfig from "../../../configuration";
let base = `./${enviromentConfig.generator.proyectName}`;
export const monolithWD: Array<string> = [
  base,
  `${base}/src`,
  `${base}/src/business`,
  `${base}/src/business/dto`,
  `${base}/src/business/security`,
  `${base}/src/business/service`,
  `${base}/src/business/rest`,
  `${base}/src/entity`,
  `${base}/src/framework`,
  `${base}/src/middleware`,
  `${base}/src/repository`,
  `${base}/src/rest`,
  `${base}/src/service`,
];
