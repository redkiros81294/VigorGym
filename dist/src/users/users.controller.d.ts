import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserDocument } from './schemas/user.schema';
import { Request, Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userDto: UserDto): Promise<UserDocument>;
    getAllUsers(): Promise<UserDocument[]>;
    getUserById(id: string): Promise<UserDocument | null>;
    updateUserProfile(id: string, updatedUser: Partial<UserDto>): Promise<UserDocument | null>;
    getProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
