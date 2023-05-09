import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/user.entity';
import { CreateUserDto } from './dto/user-dto';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.create(createUserDto);
  }


@Post('login')
async login(@Body() createUserDto: CreateUserDto): Promise<{ token: string }>{
  return this.appService.login(createUserDto);
}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
