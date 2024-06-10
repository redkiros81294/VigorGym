import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { Membership, MembershipSchema } from './schemas/membership.schema';
import { ChapaModule } from '../chapa-sdk/chapa.module';

@Module({
  imports: [
    ChapaModule.register({
    secretKey: 'your-chapa-secret-key',
  }),
    MongooseModule.forFeature([{ name: Membership.name, schema: MembershipSchema }])],
  providers: [MembershipService],
  controllers: [MembershipController],
})
export class MembershipModule {}
