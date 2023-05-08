import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './dto/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    const user = new User();
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
