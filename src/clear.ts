import { executeCMD } from "./utilities/command.exec";
import enviromentConfig from "./configuration";
const clear = async () => {
  var cmd = `(rm -r models/ || true) && (rm -r ${enviromentConfig.generator.proyectName}/ || true) && (rm -r lambdas/ || true)`;
  await executeCMD(cmd);
};
clear();
