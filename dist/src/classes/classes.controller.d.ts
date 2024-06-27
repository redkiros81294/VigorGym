import { ClassService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { Response } from 'express';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    create(createClassDto: CreateClassDto): Promise<import("./schemas/class.schema").Class>;
    findAll(): Promise<import("./schemas/class.schema").Class[]>;
    update(id: string, createClassDto: CreateClassDto): Promise<import("./schemas/class.schema").Class>;
    delete(id: string): Promise<import("./schemas/class.schema").Class>;
    getBlogPage(res: Response): void;
}
