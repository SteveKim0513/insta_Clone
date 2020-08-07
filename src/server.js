// setting dotenv
require("dotenv").config()

const PORT = process.env.PORT || 4000;

// logger module
import logger from "morgan";

// connect graphQL server
import { GraphQLServer } from "graphql-yoga";

// import merged schema
import schema from "./schema";

const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server running on http://localhost:${PORT}`)); 
