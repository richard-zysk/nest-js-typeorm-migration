import { AppService } from './app.service';
import { User } from './dto/user.entity';
import { CreateUserDto } from './dto/user-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    getHello(): string;
}
