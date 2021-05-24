import { createConnection } from "typeorm";

export const getConnection = async (dbConfig) => {
  let connection = await createConnection(dbConfig);
  return connection;
};
