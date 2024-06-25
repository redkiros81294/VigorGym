import { PaymentService } from './payment.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { Request } from 'express';
export declare class PaymentController {
    private readonly paymentService;
    private readonly enrollmentService;
    constructor(paymentService: PaymentService, enrollmentService: EnrollmentService);
    processPayment(paymentDto: {
        amount: number;
        type: string;
        productName?: string;
        companyEmail?: string;
        planType?: string;
        numberOfEmployees?: number;
    }, req: Request): Promise<{
        success: boolean;
        message: string;
        data: any;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        companyCode: string;
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
