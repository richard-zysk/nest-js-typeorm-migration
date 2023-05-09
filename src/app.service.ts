import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './dto/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

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
    user.password = await bcrypt.hash(password, 10);

    return this.userRepository.save(user);
  }

  async login(createUserDto: CreateUserDto): Promise<{ token: string }> {
    const { email, password } = createUserDto;
   const options: FindOneOptions<User> = { where: { email },}

    const user = await this.userRepository.findOne(options);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({ email: user.email, id: user.id }, 'my_secret_key_here');
    return { token };
  }




  getHello(): string {
    return 'Hello World!';
  }
}
