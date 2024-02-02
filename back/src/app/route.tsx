import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { loadSchemaSync } from "@graphql-tools/load"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { resolvers } from "./api/graphql/resolver"

const typeDefs = loadSchemaSync("src/app/api/graphql/schema/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler(server, {})

export { handler as POST, handler as GET }
