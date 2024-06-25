// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type EnrollmentDocument = Enrollment & Document;

// @Schema()
// export class Enrollment {
//   @Prop({ required: true })
//   companyName: string;

//   @Prop({ required: true })
//   companyEmail: string;

//   @Prop({ required: true })
//   planType: string;

//   @Prop({ required: true })
//   numberOfEmployees: number;

//   @Prop({ required: true })
//   totalAmount: number;

//   @Prop({ required: true, unique: true })
//   companyCode: string;

//   @Prop({ required: true })
//   employeesRemaining: number;
// }

// export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);


import { Schema, Document, model } from 'mongoose';

export interface Enrollment {
  companyName: string;
  companyEmail: string;
  planType: string;
  numberOfEmployees: number;
  totalAmount: number;
  companyCode: string;
  employeesRemaining: number;
}

export interface EnrollmentDocument extends Document, Enrollment {}

export const EnrollmentSchema = new Schema({
  companyName: { type: String, required: true },
  companyEmail: { type: String, required: true },
  planType: { type: String, required: true },
  numberOfEmployees: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  companyCode: { type: String, required: true, unique: true },
  employeesRemaining: { type: Number, required: true },
});

export const EnrollmentModel = model<EnrollmentDocument>('Enrollment', EnrollmentSchema);
