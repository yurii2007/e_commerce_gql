import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(username: string) {
    return `This action returns a #${username}`;
  }

  update(username: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${username}`;
  }

  remove(username: string) {
    return `This action removes a #${username}`;
  }
}
