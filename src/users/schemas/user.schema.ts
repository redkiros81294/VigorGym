
// // user.schema.ts
// import { Schema, Document, model } from 'mongoose';
// import { User } from '../interfaces/user.interface';

// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   roles: { type: [String], default: ['user'] },
// });

// export interface UserDocument extends Document {
//   username: string;
//   password: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   roles: string[];
// }

// export const UserModel = model<UserDocument>('User', UserSchema);
// export { UserSchema };

import { Schema, Document, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  companyCode: { type: String }, // Add companyCode field
});

export interface UserDocument extends Document {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  companyCode?: string; // Make companyCode optional
}

export const UserModel = model<UserDocument>('User', UserSchema);
export { UserSchema };
