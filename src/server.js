// setting dotenv
require("dotenv").config()

const PORT = process.env.PORT || 4000;

// connect graphQL server
import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "hi"
    }
};

const server = new GraphQLServer({typeDefs,resolvers});
  
server.start({port: PORT}, () => console.log(`Server running on http://localhost:${PORT}`)); 
