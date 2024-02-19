import { FragmentType, graphql, useFragment } from "@/generated"
import { Td, Tr } from "@chakra-ui/react"
import React from "react"

const PostBaseFragment = graphql(`
  fragment PostBase on Post {
    id
    title
    content
  }
`)

type PostsTableRowProps = {
  post: FragmentType<typeof PostBaseFragment>
}

const PostsTableRow = ({ post }: PostsTableRowProps) => {
  const postFragment = useFragment(PostBaseFragment, post)
  return (
    <Tr>
      <Td>{postFragment.title}</Td>
      <Td>{postFragment.content}</Td>
    </Tr>
  )
}

export default PostsTableRow
