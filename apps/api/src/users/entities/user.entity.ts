import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: false })
  username!: string;

  @Field({ nullable: false })
  password!: string;
}
