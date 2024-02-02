import { PrismaClient } from "@prisma/client"
import { Resolvers } from "../types/graphql"

const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello World",
    posts: async (_, args, ___, ____) => {
      return await prisma.post.findMany()
    },
  },
  Mutation: {
    createPost: async (_, args) => {
      return prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
        },
      })
    },
  },
  // ここにrelationのresolverを書く
}
