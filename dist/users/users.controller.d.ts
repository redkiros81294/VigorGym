import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserDocument } from './schemas/user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userDto: UserDto): Promise<UserDocument>;
    getAllUsers(): Promise<import("./interfaces/user.interface").User[]>;
}
