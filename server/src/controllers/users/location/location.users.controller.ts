import { Controller, Post, Body, Headers } from '@nestjs/common';
import { AddUserLocationDto } from './dto/add-user-location.dto';
import { UsersService } from '../users.service';
import { UserPosition } from './users.position.class';

@Controller('api/v1/users/location')
export class AddUserLocationController {
  constructor(private readonly addUserLocationService: UsersService) {}

  @Post()
  async addLocation(
    @Headers() headers: any,
    @Body() addUserLocationDto: AddUserLocationDto,
  ) {
    const session: string = headers.session;
    const user: any = await this.addUserLocationService.getUserBySession(
      session,
    );

    if (user === null) {
      return { error: true, code: 131 };
    }

    const position: UserPosition = new UserPosition(
      addUserLocationDto.latitude,
      addUserLocationDto.longitude,
    );

    const newPositions: Array<UserPosition> = [...user.positions, position];

    await this.addUserLocationService.updateUsersPositions(
      user.session,
      newPositions,
    );

    return { error: false };
  }
}
