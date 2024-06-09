import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Membership extends Document {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  features: string[];

  @Prop({ required: true })
  price: number;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);
