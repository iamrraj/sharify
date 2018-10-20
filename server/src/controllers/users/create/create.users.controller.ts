import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from '../users.service';
import * as randomstring from 'randomstring';
import { SHA256 } from 'sha2';

@Controller('api/v1/users/create')
export class CreateUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto);
    } catch (error) {
      console.log(error);
      return { error: true, code: 111 };
    }
    let session = SHA256(randomstring.generate()).toString('hex');
    await this.usersService.updateUsersSession(createUserDto.email, session);
    return { error: false, session: session };
  }
}
