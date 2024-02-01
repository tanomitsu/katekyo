import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { getServerSession } from "next-auth"
import { options } from "@/options"
import SignInView from "./features/logout/SignInView"
import PostsSearchView from "./features/posts/PostsSearchView"

export default async function Home() {
  const session = await getServerSession(options)
  const user = session?.user

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      {user ? <PostsSearchView /> : <SignInView />}
    </Flex>
  )
}
