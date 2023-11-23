const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const OneEndpoint = require("./datasource");

const logimple = require("logimple")
const logger = new logimple()
logger.welcome()

async function initApolloServer(typeDefs) {
  try {
    logger.check("ApolloServer init")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        oneEndpoint: new OneEndpoint(),
      };
    },
  });
    logger.log({
      msg: "Apollo is listening",
      errorLevel: "WARN"
    })
    await server.listen({ port: process.env.PORT || 4000 });
  }
  catch(error) {
    logger.log({
      msg: error.message,
      filepath: __filename,
      errorLevel: "ERROR",
      data: error
    })
  }
}
initApolloServer(typeDefs);