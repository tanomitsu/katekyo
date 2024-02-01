import { Args, Query, Resolver } from '@nestjs/graphql'
import { Post } from './entities/post.entity'
import { PostsService } from './posts.service'

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.postsService.post({
      id,
    })
  }

  @Query(() => Post)
  createPost(
    @Args('content', { type: () => String }) content: string,
    @Args('title', { type: () => String }) title: string,
  ) {
    return this.postsService.createPost({
      content,
      title,
    })
  }
}
