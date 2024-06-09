import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
export declare class MembershipController {
    private readonly membershipService;
    constructor(membershipService: MembershipService);
    create(createMembershipDto: CreateMembershipDto): Promise<import("./schemas/membership.schema").Membership>;
    findAll(): Promise<import("./schemas/membership.schema").Membership[]>;
    update(id: string, createMembershipDto: CreateMembershipDto): Promise<import("./schemas/membership.schema").Membership>;
    delete(id: string): Promise<import("./schemas/membership.schema").Membership>;
}
