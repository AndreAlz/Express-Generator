const { exec } = require("child_process");

export const executeCMD = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error("ERROR executeCMD:");
        console.error(`Error executing command line ${command}`);
        console.error(`Error trace: `, err);
        reject(err);
        return;
      } else {
        console.log(`RESULT OF COMMNAD ${command}:`);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve({ stdout, stderr });
      }
    });
  });
};
