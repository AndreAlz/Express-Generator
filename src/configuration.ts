import { ModelGeneratorDto } from "./utilities/dto/ModelGeneratorDto";
import { executeCMD } from "./utilities/command.exec";
const enviromentConfig = {
  activeprofile: "local",
  generator: {
    proyectName: "local_project",
    prefix: "local_project",
    monolith: { active: true, security: true, roles: ["ADMIN", "SYS_ADMIN"] },
    lambda: { active: true },
    commnads: {
      models: (params: ModelGeneratorDto): Promise<any> => {
        var cmd = `((rm -r models/ || true) && typeorm-model-generator -o './models' -h ${params.host} -h ${params.port} -d ${params.db} -u ${params.user} -x ${params.password} -s ${params.schema} -e ${params.type})`;
        return executeCMD(cmd);
      },
    },
  },
  local: {
    dbconfig: {
      type: "postgres",
      host: "localhost",
      schema: "public",
      synchronize: false,
      port: 5432,
      username: "postgres",
      password: "root",
      database: "postgres",
      encrypt: true,
      connectTimeoutMS: 60000,
      entities: ["src/entity/**/*.ts"],
    },
    security: {
      active: true,
      rounds: 2,
      secret: "secrete",
      expiresIn: 86400,
    },
  },
};

export default enviromentConfig;
