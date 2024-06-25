// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Blog extends Document {
//   @Prop({ required: true })
//   title: string;

//   @Prop({ required: true })
//   description: string;

//   @Prop({ required: true })
//   backgroundImage: string;

//   @Prop()
//   voice: string;
// }

// export const BlogSchema = SchemaFactory.createForClass(Blog);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  imageUrl: string; // Add this field for storing the file path
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
