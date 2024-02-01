"use client"

import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { signIn } from "next-auth/react"

const SignInView: React.FC = () => {
  return (
    <Flex direction="column" background="gray.100" padding={12} rounded={6}>
      <Heading size="xl" mb={6}>
        ユーザーにログイン
      </Heading>
      <Button mb={6} onClick={() => signIn()}>
        OAuthを使ってログイン
      </Button>
      <Input
        placeholder="example@sample.com"
        variant="filled"
        mb={3}
        type="email"
      />
      <Input placeholder="********" variant="filled" mb={6} type="password" />
      <Button mb={6} colorScheme="teal">
        ログイン
      </Button>
    </Flex>
  )
}

export default SignInView
