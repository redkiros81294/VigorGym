// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PaymentController } from './payment.controller';
// import { PaymentService } from './payment.service';
// import { PaymentSchema, PaymentModel } from './schemas/payment.schema';
// import { UserSchema, UserModel } from '../users/schemas/user.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: PaymentModel.modelName, schema: PaymentSchema }]),
//     MongooseModule.forFeature([{ name: UserModel.modelName, schema: UserSchema }]),
//   ],
//   controllers: [PaymentController],
//   providers: [PaymentService],
// })
// export class PaymentModule {}

// payment.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentSchema, PaymentModel } from './schemas/payment.schema';
import { UserSchema, UserModel } from '../users/schemas/user.schema';
import { EnrollmentModule } from '../enrollment/enrollment.module';// Correct import

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PaymentModel.modelName, schema: PaymentSchema }]),
    MongooseModule.forFeature([{ name: UserModel.modelName, schema: UserSchema }]),
    EnrollmentModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
