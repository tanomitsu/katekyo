"use client"

import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background={formBackGround}
        padding={12}
        rounded={6}
      >
        <Heading size="xl" mb={6}>
          ユーザーにログイン
        </Heading>
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
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}
