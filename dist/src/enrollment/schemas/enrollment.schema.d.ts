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
export interface Enrollment {
    companyName: string;
    companyEmail: string;
    planType: string;
    numberOfEmployees: number;
    totalAmount: number;
    companyCode: string;
    employeesRemaining: number;
}
export interface EnrollmentDocument extends Document, Enrollment {
}
export declare const EnrollmentSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    companyCode: string;
    companyName: string;
    companyEmail: string;
    planType: string;
    numberOfEmployees: number;
    totalAmount: number;
    employeesRemaining: number;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    companyCode: string;
    companyName: string;
    companyEmail: string;
    planType: string;
    numberOfEmployees: number;
    totalAmount: number;
    employeesRemaining: number;
}>> & import("mongoose").FlatRecord<{
    companyCode: string;
    companyName: string;
    companyEmail: string;
    planType: string;
    numberOfEmployees: number;
    totalAmount: number;
    employeesRemaining: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const EnrollmentModel: import("mongoose").Model<EnrollmentDocument, {}, {}, {}, Document<unknown, {}, EnrollmentDocument> & EnrollmentDocument & Required<{
    _id: unknown;
}>, any>;
