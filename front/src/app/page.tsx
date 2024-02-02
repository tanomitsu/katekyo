import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { getServerSession } from "next-auth"
import { options } from "@/options"
import PostsSearchView from "./features/posts/PostsSearchView"
import OAuthLoginButton from "./features/login/components/OAuthLoginButton"
import OAuthLogoutButton from "./features/logout/components/OAuthLogoutButton"

export default async function Home() {
  const session = await getServerSession(options)
  const user = session?.user

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      {user ? (
        <>
          Logged In!
          <OAuthLogoutButton />
        </>
      ) : (
        <></>
      )}
    </Flex>
  )
}
