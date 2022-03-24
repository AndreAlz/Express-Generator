const { exec } = require("child_process");

export const executeCMD = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      console.log(`*-------------EXEC COMMAND----------------*`);
      console.log(command);
      if (err) {
        console.error("*-----------ERROR executeCMD------------*");
        console.error(`Error executing command line ${command}`);
        console.error(`Error trace: `, err);
        console.error("*-----------ERROR executeCMD------------*");
        reject(err);
        return;
      } else {
        console.log(`*-----------RESULT OF COMMNAD:------------*`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.error("*-----------RESULT OF COMMNAD------------*");
        resolve({ stdout, stderr });
      }
    });
  });
};

export const executeDirCMD = (command, dirPath) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: dirPath }, (err, stdout, stderr) => {
      console.log(`*-------------EXEC COMMAND----------------*`);
      console.log(command);
      if (err) {
        console.error("*-----------ERROR executeCMD------------*");
        console.error(`Error executing command line ${command}`);
        console.error(`Error trace: `, err);
        console.error("*-----------ERROR executeCMD------------*");
        reject(err);
        return;
      } else {
        console.log(`*-----------RESULT OF COMMNAD:------------*`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.error("*-----------RESULT OF COMMNAD------------*");
        resolve({ stdout, stderr });
      }
    });
  });
};
