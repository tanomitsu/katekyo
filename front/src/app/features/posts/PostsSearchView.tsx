import { Table, Th, Thead, Tr } from "@chakra-ui/react"

const PostsSearchView = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>投稿日時</Th>
          <Th>タイトル</Th>
        </Tr>
      </Thead>
    </Table>
  )
}

export default PostsSearchView