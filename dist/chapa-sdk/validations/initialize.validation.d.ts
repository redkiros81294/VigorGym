import { InitializeOptions } from '../interfaces/initialize.interface';
export declare const validateInitializeOptions: (initializeOptions: InitializeOptions) => Promise<{
    first_name?: string;
    last_name?: string;
    email?: string;
    currency?: string;
    amount?: string;
    tx_ref?: string;
    callback_url?: string;
    return_url?: string;
    customization?: {
        title?: string;
        description?: string;
        logo?: string;
    };
    subaccounts?: {
        id?: string;
        split_type?: string;
        transaction_charge?: string;
    }[];
}>;
