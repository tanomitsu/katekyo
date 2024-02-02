"use client"

import { Button } from "@chakra-ui/react"
import { signIn } from "next-auth/react"

const OAuthLoginButton = () => {
  return (
    <Button mb={6} onClick={() => signIn()}>
      OAuthを使ってログイン
    </Button>
  )
}

export default OAuthLoginButton