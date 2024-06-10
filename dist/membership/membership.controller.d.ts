import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { ChapaService } from '../chapa-sdk/chapa.service';
import { Response } from 'express';
export declare class MembershipController {
    private readonly membershipService;
    private readonly chapaService;
    constructor(membershipService: MembershipService, chapaService: ChapaService);
    getMembershipPage(res: Response): void;
    create(createMembershipDto: CreateMembershipDto): Promise<import("./schemas/membership.schema").Membership>;
    findAll(): Promise<import("./schemas/membership.schema").Membership[]>;
    update(id: string, createMembershipDto: CreateMembershipDto): Promise<import("./schemas/membership.schema").Membership>;
    delete(id: string): Promise<import("./schemas/membership.schema").Membership>;
    payForMembership(membershipId: string, body: any): Promise<import("../chapa-sdk").InitializeResponse>;
    paymentCallback(membershipId: string, txRef: string): Promise<import("../chapa-sdk").VerifyResponse>;
    paymentReturn(membershipId: string, txRef: string): Promise<import("../chapa-sdk").VerifyResponse>;
}
