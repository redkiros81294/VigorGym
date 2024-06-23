// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class User extends Document {
//   @Prop({ required: true })
//   userId: number;

//   @Prop({ required: true })
//   status: string;

//   @Prop({ required: true })
//   registrationDate: Date;
// }

// user.schema.ts
import { Schema, Document, model } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export interface UserDocument extends Document {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const UserModel = model<UserDocument>('User', UserSchema);
export { UserSchema };
