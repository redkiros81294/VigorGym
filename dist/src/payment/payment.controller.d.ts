import { PaymentService } from './payment.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { Request, Response } from 'express';
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
    } | {
        success: boolean;
        companyCode: string;
    }>;
    verifyPayment(txRef: string, req: Request): Promise<{
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
    getMembershipPage(res: Response): void;
}
