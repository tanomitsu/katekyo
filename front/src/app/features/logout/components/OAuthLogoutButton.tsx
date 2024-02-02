"use client"

import { Button } from "@chakra-ui/react"
import { signOut } from "next-auth/react"

const OAuthLogoutButton = () => {
  return (
    <Button mb={6} onClick={() => signOut()}>
      ログアウト
    </Button>
  )
}

export default OAuthLogoutButton
