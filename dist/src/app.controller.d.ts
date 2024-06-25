import { Response } from 'express';
export declare class AppController {
    uploadFile(file: any): {
        filePath: string;
    };
    getProfilePage(): string;
    getHomePage(res: Response): void;
    getAboutPage(res: Response): void;
    getContactPage(res: Response): void;
    getCMembershipPage(res: Response): void;
    getClassesPage(res: Response): void;
    getAdminPage(res: Response): void;
    getblogPage(res: Response): void;
    getGmembershipPage(res: Response): void;
    getRegPage(res: Response): void;
}
