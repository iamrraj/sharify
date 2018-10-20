import { Controller, Post, Body } from '@nestjs/common';
import { UserAuthenticationDto } from './dto/user-authentication.dto';
import { UsersService } from '../users.service';
import * as randomstring from 'randomstring';
import { SHA256 } from 'sha2';

@Controller('api/v1/users/auth')
export class AuthenticateUsersController {
  constructor(private readonly authenticateUsersService: UsersService) {}

  @Post()
  async auth(@Body() authUserDto: UserAuthenticationDto) {
    const givenPasswordHash: string = authUserDto.password;
    console.log(authUserDto);
    const user: any = await this.authenticateUsersService.getUserByEmail(
      authUserDto.email,
    );
    if (user === null) {
      return { error: true, code: 101 };
    }

    if (givenPasswordHash !== user.password) {
      return { error: true, code: 102 };
    }

    let session = SHA256(randomstring.generate()).toString('hex');
    await this.authenticateUsersService.updateUsersSession(user.email, session);
    return { error: false, session: session };
  }
}
