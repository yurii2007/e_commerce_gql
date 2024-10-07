import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username!: string;

  @Field({ nullable: false })
  password!: string;
}
