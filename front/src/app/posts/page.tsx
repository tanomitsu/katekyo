import { Heading, Text } from "@chakra-ui/react"
import { cacheExchange, createClient, fetchExchange } from "urql"
import { registerUrql } from "@urql/next/rsc"

const makeClient = () => {
  return createClient({
    url: process.env.NEXT_GRAPHQL_ENDPOINT ?? "",
    exchanges: [cacheExchange, fetchExchange],
  })
}

const { getClient } = registerUrql(makeClient)

const helloQuery = `
  query SayHello {
    hello
  }
`

const PostsPage: React.FC = async () => {
  const result = await getClient().query(helloQuery, {})
  return (
    <>
      <Heading>投稿一覧</Heading>
      <Text>{JSON.stringify(result)}</Text>
    </>
  )
}

export default PostsPage
