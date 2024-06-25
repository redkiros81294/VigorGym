// import { Schema, Document, model } from 'mongoose';

// const PaymentSchema = new Schema({
//   amount: { type: Number, required: true },
//   type: { type: String, required: true },
//   status: { type: String, required: true },
//   transactionReference: { type: String, required: true },
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// export interface Payment extends Document {
//   amount: number;
//   type: string;
//   status: string;
//   transactionReference: string;
//   user: Schema.Types.ObjectId;
//   createdAt: Date;
// }

// export const PaymentModel = model<Payment>('Payment', PaymentSchema);
// export { PaymentSchema };

import { Schema, Document, model } from 'mongoose';

const PaymentSchema = new Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  transactionReference: { type: String, required: true },
  user: { type: String, ref: 'User', required: true }, // Change to string
  createdAt: { type: Date, default: Date.now },
});

export interface Payment extends Document {
  amount: number;
  type: string;
  status: string;
  transactionReference: string;
  user: string; // Change to string
  createdAt: Date;
}

export const PaymentModel = model<Payment>('Payment', PaymentSchema);
export { PaymentSchema };
