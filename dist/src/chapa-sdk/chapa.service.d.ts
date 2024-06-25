import { HttpService } from '@nestjs/axios';
import { ChapaOptions, CreateSubaccountOptions, CreateSubaccountResponse, GenerateTransactionReferenceOptions, GetBanksResponse, InitializeOptions, InitializeResponse, VerifyOptions, VerifyResponse } from './interfaces';
interface IChapaService {
    initialize(initializeOptions: InitializeOptions): Promise<InitializeResponse>;
    mobileInitialize(initializeOptions: InitializeOptions): Promise<InitializeResponse>;
    verify(verifyOptions: VerifyOptions): Promise<VerifyResponse>;
    generateTransactionReference(generateTransactionReferenceOptions?: GenerateTransactionReferenceOptions): Promise<string>;
    getBanks(): Promise<GetBanksResponse>;
    createSubaccount(createSubaccountOptions: CreateSubaccountOptions): Promise<CreateSubaccountResponse>;
}
export declare class ChapaService implements IChapaService {
    private chapaOptions;
    private readonly httpService;
    constructor(chapaOptions: ChapaOptions, httpService: HttpService);
    initialize(initializeOptions: InitializeOptions): Promise<InitializeResponse>;
    mobileInitialize(initializeOptions: InitializeOptions): Promise<InitializeResponse>;
    verify(verifyOptions: VerifyOptions): Promise<VerifyResponse>;
    generateTransactionReference(generateTransactionReferenceOptions?: GenerateTransactionReferenceOptions): Promise<string>;
    getBanks(): Promise<GetBanksResponse>;
    createSubaccount(createSubaccountOptions: CreateSubaccountOptions): Promise<CreateSubaccountResponse>;
}
export {};
