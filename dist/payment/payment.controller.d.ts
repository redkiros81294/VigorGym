import { PaymentService } from './payment.service';
import { Request } from 'express';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    processPayment(paymentDto: {
        amount: number;
        type: string;
    }, req: Request): Promise<{
        success: boolean;
        message: string;
        data: any;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    verifyPayment(txRef: string, req: Request): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        message: string;
        data: any;
    }>;
}
