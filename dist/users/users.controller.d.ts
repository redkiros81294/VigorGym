import { UsersService } from './users.service';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserProfilePage(res: Response): void;
    findAll(): Promise<import("./schemas/user.schema").User[]>;
}
