import { InitializeOptions } from '../chapa-sdk/interfaces/initialize.interface';
import { VerifyOptions } from '../chapa-sdk/interfaces/verify.interface';
import { ChapaService } from '../chapa-sdk/chapa.service';
import { CreateSubaccountOptions } from 'src/chapa-sdk';
export declare class ChapaClientController {
    private readonly chapaService;
    constructor(chapaService: ChapaService);
    initialize(initializeOptions: InitializeOptions): Promise<import("src/chapa-sdk").InitializeResponse>;
    verify(verifyOptions: VerifyOptions): Promise<import("src/chapa-sdk").VerifyResponse>;
    createSubaccount(createSubaccountOptions: CreateSubaccountOptions): Promise<import("src/chapa-sdk").CreateSubaccountResponse>;
}
