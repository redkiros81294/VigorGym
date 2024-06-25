import { ChapaOptions } from './interfaces';
export declare function createChapaProviders(options: ChapaOptions): {
    provide: string;
    useValue: ChapaOptions;
}[];
