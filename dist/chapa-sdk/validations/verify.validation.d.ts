import { VerifyOptions } from '../interfaces/verify.interface';
export declare const validateVerifyOptions: (verifyOptions: VerifyOptions) => Promise<{
    tx_ref?: string;
}>;
