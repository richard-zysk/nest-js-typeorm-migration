import { User } from './dto/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-dto';
export declare class AppService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    getHello(): string;
}
