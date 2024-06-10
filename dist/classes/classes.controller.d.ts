import { ClassService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { ChapaService } from '../chapa-sdk/chapa.service';
import { Response } from 'express';
export declare class ClassController {
    private readonly classService;
    private readonly chapaService;
    constructor(classService: ClassService, chapaService: ChapaService);
    create(createClassDto: CreateClassDto): Promise<import("./schemas/class.schema").Class>;
    findAll(): Promise<import("./schemas/class.schema").Class[]>;
    update(id: string, createClassDto: CreateClassDto): Promise<import("./schemas/class.schema").Class>;
    delete(id: string): Promise<import("./schemas/class.schema").Class>;
    payForClass(classId: string, body: any): Promise<import("../chapa-sdk").InitializeResponse>;
    paymentCallback(classId: string, txRef: string): Promise<import("../chapa-sdk").VerifyResponse>;
    paymentReturn(classId: string, txRef: string): Promise<import("../chapa-sdk").VerifyResponse>;
    getClassesPage(res: Response): void;
}
