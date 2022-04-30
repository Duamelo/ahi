
const { ApolloServer } = require('apollo-server')
import typeDefs from "./graphql/schema/schema";
import resolvers from "./graphql/resolvers/resolvers";


import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from "typeorm";
import config from "../infrastructure/src/persistence/orm/ormconfig";
import validateEnv from "./src/utils/validateEnv";

const port = process.env.PORT || 9090;

validateEnv();


(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const server = new ApolloServer({ resolvers, typeDefs });

  server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
})();