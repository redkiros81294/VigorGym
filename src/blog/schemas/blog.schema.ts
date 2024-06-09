import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Blog extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  backgroundImage: string;

  @Prop()
  voice: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
