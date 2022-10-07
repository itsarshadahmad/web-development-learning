const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3000, () => {
    console.log('Running GraphQL server...');
  });
}

startApolloServer();


// // building graphql schema and basic gQL server
// const { buildSchema } = require("graphql")
// const { graphqlHTTP } = require("express-graphql")
// const schema = buildSchema(`
//   type Query {
//     description: String
//     price: Float
//   }
// `);

// # ! means important field
// Product is custom type which is model of data in itself.
// Schema is not db but it is structure which is used to communicate data through API
// gQL supports unique identifier or id in every model/type of data in schema if needed.
// ID is gQL syntax to generate id for types.
// const schema = buildSchema(`
//   type Query {
//     products: [Product]
//     orders: [Order]
//   }

//   type Product {
//     id: ID!
//     description: String!
//     reviews: [Review]
//     price: Float!
//   }

//   type Review {
//     rating: Int!
//     comment: String
//   }

//   type Order {
//     date: String!
//     subtotal: Float!
//     items: [OrderItem]
//   }

//   type OrderItem {
//     product: Product!
//     quantity: Int!
//   }
// `)

// const root = {
//   description: "Red Shoe",
//   price: 42.12
// }

// const app = express()

// gQL uses post method. To query we send query in gQL way as json. graphqlHTTP() is
// middleware which response to gQL queries.
// app.use("/graphql", graphqlHTTP({
//   schema: schema,
//   rootValue: root
// }))

// app.listen(3000)

// Client <==== GraphQL (POST /graphql) ====> Server

// Advantage of gQL:
// No under-fetching and no over-fetching
// Schemas and types
// Speeds up development

// Disadvantages of gQL:
// Flexibility adds complexity
// Difficult to cache