import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
const clear = async () => {
  var cmd = `(rm -r models/ || true) && (rm -r ${enviromentConfig.generator.proyectName}/ || true) && (rm -r ${enviromentConfig.generator.proyectName}_lambdas/ || true) && (rm -r ${enviromentConfig.generator.proyectName}/ || true) && (rm -r ${enviromentConfig.generator.proyectName}_lambda_business/ || true)`;
  await executeCMD(cmd);
};
clear();
