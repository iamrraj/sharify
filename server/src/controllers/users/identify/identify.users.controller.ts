import { Controller, Post, Body } from '@nestjs/common';
import { IdentifyUserDto } from './dto/identify.user.dto';
import { UsersService } from '../users.service';

@Controller('api/v1/users/identify')
export class IdentifyUserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async identify(@Body() identifyUserDto: IdentifyUserDto) {
    const user: any = await this.userService.getUserBySession(
      identifyUserDto.session,
    );

    if (user === null) {
      return { error: true, code: 121 };
    }
    return { error: false, result: { name: user.name, email: user.email } };
  }
}
