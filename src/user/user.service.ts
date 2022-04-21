import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async create(userDto: UserDto) {
    const { userId, userPassword } = userDto;
    if (!userId && userPassword) {
      return { message: 'bad' };
    } else {
      console.log('===userDto===', userDto);
      const jwt = { userId: userId, userPassword: userPassword };
      const jwtToken = this.jwtService.sign(jwt);
      await this.userRepository.save({ userId, userPassword, jwtToken });
      return { message: 'success' };
    }
  }
}
