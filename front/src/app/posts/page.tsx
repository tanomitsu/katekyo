import { Heading, Skeleton, Table, Tbody } from "@chakra-ui/react"
import { graphql } from "@/generated"
import PostsTableRow from "./components/PostsTableRow.server"
import { getClient } from "@/lib/ApolloClient"
import { Suspense } from "react"

const postsQuery = graphql(`
  query Posts {
    posts {
      id
      ...PostBase
    }
  }
`)

const helloQuery = graphql(`
  query Hello {
    sayHello
  }
`)

const PostsPage: React.FC = async () => {
  const helloResult = await getClient().query({ query: helloQuery })
  const helloQueryResult = helloResult.data?.sayHello ?? ""
  const result = await getClient().query({ query: postsQuery })
  const posts = result.data?.posts ?? []
  return (
    <>
      <Heading>
        投稿一覧({posts.length}): {helloQueryResult}
      </Heading>
      <Suspense fallback={<Skeleton />}>
        <Table>
          <Tbody>
            {posts.map((post) => (
              <PostsTableRow key={post.id} post={post} />
            ))}
          </Tbody>
        </Table>
      </Suspense>
    </>
  )
}

export default PostsPage
