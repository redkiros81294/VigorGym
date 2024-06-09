import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Class extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  schedule: string[];

  @Prop({ required: true })
  rate: number;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
