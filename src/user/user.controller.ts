import { Body, Controller, Delete, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }

  // userId && userPassword 검색해서 일치한다면 전체 조회! 후 삭제
  // @Post('/delete')
}
