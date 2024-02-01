import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User } from 'src/modules/users/entities/user.entity'

@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string

  @Field(() => String!)
  title!: string

  @Field(() => String!)
  content!: string

  @Field(() => ID!)
  authorId!: string

  @Field(() => User)
  author!: User
}
