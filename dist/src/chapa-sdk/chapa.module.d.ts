import { DynamicModule } from '@nestjs/common';
import { ChapaOptions, ChapaAsyncOptions } from './interfaces';
export declare class ChapaModule {
    static register(options: ChapaOptions): DynamicModule;
    static registerAsync(options: ChapaAsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
