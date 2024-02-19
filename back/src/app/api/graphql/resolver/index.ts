import { PrismaClient } from "@prisma/client"
import { Resolvers } from "../types/graphql"

const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    sayHello: () => "Hello, World!",
    posts: async (_, args, ___, ____) => {
      return await prisma.post.findMany()
    },
  },
  Mutation: {
    createPost: async (_, args) => {
      const posts = prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
        },
      })
      // DEBUG
      console.log(`posts: ${JSON.stringify(posts)}`)
      return posts
    },
  },
  // ここにrelationのresolverを書く
}
