import { Controller, Post, Body, Headers } from '@nestjs/common';
import { AddUserLocationDto } from './dto/add-user-location.dto';
import { UsersService } from '../users.service';
import { Position } from './position.class';

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
      return { error: true, code: 301 };
    }

    const position: Position = new Position(
      addUserLocationDto.latitude,
      addUserLocationDto.longitude,
    );

    const newPositions: Array<Position> = [...user.positions, position];

    await this.addUserLocationService.updateUsersPositions(
      user.session,
      newPositions,
    );

    return { error: false };
  }
}
