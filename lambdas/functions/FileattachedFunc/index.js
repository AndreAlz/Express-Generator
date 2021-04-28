const typeorm = require("/opt/dist/node_modules/typeorm");
const common = require("/opt/dist/index.js");

var databaseconfig = {"type":"postgres","host":"iprovider-test-instance-1.cwcijcrlxku7.us-east-2.rds.amazonaws.com","schema":"iprovider","port":5432,"username":"iprovider","password":"Pa$w0rd","connectTimeoutMS":100000,"database":"iprovider_dev","entities":["/opt/dist/entity/**/*.js"]};
databaseconfig.password = "Pa$$w0rd";
exports.handler = async (body, ctx, callback) => {
  var conn = await typeorm.createConnection(databaseconfig);
  var repo = typeorm.getCustomRepository(common.FileattachedRepository)
  var service = new common.FileattachedService();
  var res = {
    mensaje: "Funcion ejecutada con exito",
    status: 200,
    data: null,
  };
  try {
    switch (body.action) {
      case "findall":
        res.data = await service.findall();
        break;
      case "find":
        res.data = await service.find(body.payload);
        break;
      case "create":
        res.data = await service.create(body.payload);
        break;
      case "save":
        res.data = await service.save(body.payload);
        break;
      case "delete":
        res.data = await service.delete(body.payload);
        break;
      default:
        res.mensaje = "Acction property is not present";
        break;
    }
  } catch (e) {
    res.mensaje = "Error al ejecutar esta accion.";
    res.msgError = e.message;
    res.status = 500;
    res.data = null;
  } finally {
    conn.close();
  }
  return res;
};
