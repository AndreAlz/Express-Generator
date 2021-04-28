import * as readline from "readline";
import mainProcess from "./process/mainProcess";
import dynamoProcess from "./process/dynamoProcess";
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let configuracion = {
  monolith: true,
  lambdas: false,
  dynamo: false,
  env: "devlocal",
  projectname: "morganti",
  monolithWS: [
    "./generated",
    "./generated/src",
    "./generated/src/entity",
    "./generated/src/framework",
    "./generated/src/middleware",
    "./generated/src/repository",
    "./generated/src/service",
    "./generated/src/rest",
  ],
};

rl.question("Generar projecto monolito ? (Si/No):\n", (res1: string) => {
  rl.question("Generar lambdas AWS (Si/No):\n", (res2: string) => {
    rl.question("Env File a usar (Default: devlocal):\n", (res3: string) => {
      rl.question(
        "Nombre de Proyecto (Default: morganti):\n",
        (res4: string) => {
          rl.question("Generar Dynamo ? (Si/No:)\n", (res5: string) => {
            if (res1 === "No") {
              configuracion.monolith = false;
            } else {
              if (res2 !== "No") {
                configuracion.lambdas = true;
              }
            }
            if (res3 !== "") {
              configuracion.env = res3;
            }
            if (res4 !== "") {
              configuracion.projectname = res4;
            }
            if (res5 !== "No") {
              configuracion.dynamo = true;
            }
            rl.close();
          });
        },
      );
    });
  });
});
rl.on("close", async function () {
  console.log("Configuracion Actual: ", configuracion);
  console.log("INICIO DE PROCESO");
  if (configuracion.monolith) {
    await mainProcess(configuracion);
  }
  if (configuracion.dynamo) {
    await dynamoProcess();
  }

  process.exit(0);
});
