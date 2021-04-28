import { createConnection, Connection } from "typeorm";

export const getConnection = async (dbConfig) => {
  let connection = await createConnection(dbConfig);
  return connection;
};
