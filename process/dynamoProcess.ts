import { executeCMD } from "../utils/commands";

let tablesCommnad = `aws dynamodb list-tables`;

const dynamoProcess = async () => {
  let tablesCommnadRes: any = await executeCMD(tablesCommnad);
  let listTables = JSON.parse(tablesCommnadRes.stdout);
  for (var i = 0; i < listTables.TableNames.length; i++) {
    let name = listTables.TableNames[i];
    let tableMetadataCommnad = `aws dynamodb describe-table --table-name ${name}`;
    let tableMetadataCommnadRes: any = await executeCMD(tableMetadataCommnad);
    let metadata = JSON.parse(tableMetadataCommnadRes.stdout);
    console.log(metadata.Table.AttributeDefinitions);
    console.log(metadata.Table.KeySchema);
  }
};

export default dynamoProcess;
