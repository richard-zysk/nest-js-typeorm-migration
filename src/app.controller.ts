import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/user.entity';
import { CreateUserDto } from './dto/user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.create(createUserDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
