/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Schema, Document } from 'mongoose';
declare const PaymentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    type: string;
    user: string;
    amount: number;
    status: string;
    transactionReference: string;
    createdAt: Date;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    type: string;
    user: string;
    amount: number;
    status: string;
    transactionReference: string;
    createdAt: Date;
}>> & import("mongoose").FlatRecord<{
    type: string;
    user: string;
    amount: number;
    status: string;
    transactionReference: string;
    createdAt: Date;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export interface Payment extends Document {
    amount: number;
    type: string;
    status: string;
    transactionReference: string;
    user: string;
    createdAt: Date;
}
export declare const PaymentModel: import("mongoose").Model<Payment, {}, {}, {}, Document<unknown, {}, Payment> & Payment & Required<{
    _id: unknown;
}>, any>;
export { PaymentSchema };
