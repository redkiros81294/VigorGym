import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  registrationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
