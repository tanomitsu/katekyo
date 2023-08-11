import { Resolver, Query, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.user({
      id,
    })
  }

  @Query(() => [User], { name: 'admin_users' })
  async adminUsers() {
    return await this.usersService.users({})
  }

  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput)
  // }

  // @Query(() => [User], { name: 'users' })
  // findAll() {
  //   return this.usersService.findAll()
  // }

  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput)
  // }

  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id)
  // }
}
