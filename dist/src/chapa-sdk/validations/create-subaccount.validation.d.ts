import { CreateSubaccountOptions } from '../interfaces';
export declare const validateCreateSubaccountOptions: (createSubaccountOptions: CreateSubaccountOptions) => Promise<{
    split_type?: {};
    business_name?: string;
    account_name?: string;
    bank_code?: string;
    account_number?: string;
    split_value?: number;
}>;
