import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { Membership } from './schemas/membership.schema';

@Injectable()
export class MembershipService {
  constructor(@InjectModel(Membership.name) private membershipModel: Model<Membership>) {}

  async create(createMembershipDto: CreateMembershipDto): Promise<Membership> {
    const newMembership = new this.membershipModel(createMembershipDto);
    return newMembership.save();
  }

  async findAll(): Promise<Membership[]> {
    return this.membershipModel.find().exec();
  }

  async update(id: string, createMembershipDto: CreateMembershipDto): Promise<Membership> {
    return this.membershipModel.findByIdAndUpdate(id, createMembershipDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Membership> {
    return this.membershipModel.findByIdAndDelete(id).exec();
  }
}
