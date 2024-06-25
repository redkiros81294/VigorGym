/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { Payment } from './schemas/payment.schema';
import { UserDocument } from '../users/schemas/user.schema';
import { ChapaService } from 'chapa-nestjs';
import { User } from 'src/users/interfaces/user.interface';
export declare class PaymentService {
    private paymentModel;
    private userModel;
    private readonly chapaService;
    private readonly logger;
    constructor(paymentModel: Model<Payment>, userModel: Model<UserDocument>, chapaService: ChapaService);
    processPayment(paymentDto: {
        amount: number;
        type: string;
        user: User;
    }): Promise<{
        success: boolean;
        message: string;
        data: {
            checkout_url: string;
        };
    } | {
        success: boolean;
        message: string;
        data: import("chapa-nestjs").InitializeResponse;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    verifyPayment(txRef: string, user: User): Promise<{
        success: boolean;
        message: string;
        data: {
            first_name: string;
            last_name: string;
            email: string;
            currency: string;
            amount: string;
            charge: string;
            mode: string;
            method: string;
            type: string;
            status: string;
            reference: string;
            tx_ref: string;
            customization: {
                title: string;
                description: string;
                logo: string;
            };
            meta: any;
            created_at: Date;
            updated_at: Date;
        };
    } | {
        success: boolean;
        message: string;
        data: import("chapa-nestjs").VerifyResponse;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
}
