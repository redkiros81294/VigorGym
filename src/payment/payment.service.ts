// import { Injectable } from '@nestjs/common';
// import axios from 'axios';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Payment, PaymentModel } from './schemas/payment.schema';
// import { User, UserModel } from '../users/schemas/user.schema';

// @Injectable()
// export class PaymentService {
//   constructor(
//     @InjectModel(PaymentModel.modelName) private paymentModel: Model<Payment>,
//     @InjectModel(UserModel.modelName) private userModel: Model<User>,
//   ) {}

  
  
//   async processPayment(paymentDto: { amount: number, type: string, userId: string }) {
//     try {
//       const response = await axios.post('https://api.chapa.co/v1/transaction/initialize', {
//         amount: paymentDto.amount,
//         currency: 'ETB',
//         email: '19re1kiros2d94@gmail.com', // Replace with user's email
//         callback_url: 'https://yourapp.com/payment/verify',
//         tx_ref: `tx_ref_${Date.now()}`,
//       });

//       if (response.data.status === 'success') {
//         return { success: true, message: 'Payment initialized successfully', data: response.data };
//       } else {
//         return { success: false, message: 'Payment initialization failed', data: response.data };
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       return { success: false, message: 'Payment processing failed' };
//     }
//   }

//   async verifyPayment(txRef: string, userId: string) {
//     const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${txRef}`);
//     if (response.data.status === 'success') {
//       const user = await this.userModel.findById(userId);
//       if (!user) {
//         return { success: false, message: 'User not found' };
//       }

//       const payment = new this.paymentModel({
//         amount: response.data.data.amount,
//         type: response.data.data.type,
//         status: response.data.data.status,
//         transactionReference: txRef,
//         user: user._id,
//         createdAt: new Date(),
//       });

//       await payment.save();

//       return { success: true, message: 'Payment verified and saved successfully', data: response.data };
//     } else {
//       return { success: false, message: 'Payment verification failed', data: response.data };
//     }
//   }
// }


// payment.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentModel } from './schemas/payment.schema';
import { UserDocument, UserModel } from '../users/schemas/user.schema';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(PaymentModel.modelName) private paymentModel: Model<Payment>,
    @InjectModel(UserModel.modelName) private userModel: Model<UserDocument>,
  ) {}

  async processPayment(paymentDto: { amount: number, type: string, username: string }) {
    try {
      const response = await axios.post('https://api.chapa.co/v1/transaction/initialize', {
        amount: paymentDto.amount,
        currency: 'ETB',
        email: '19re1kiros2d94@gmail.com', // Replace with user's email
        callback_url: 'http://localhost:3000/payment/verify',
        tx_ref: `tx_ref_${Date.now()}`,
      });

      if (response.data.status === 'success') {
        return { success: true, message: 'Payment initialized successfully', data: response.data };
      } else {
        return { success: false, message: 'Payment initialization failed', data: response.data };
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      return { success: false, message: 'Payment processing failed' };
    }
  }

  async verifyPayment(txRef: string, username: string) {
    const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${txRef}`);
    if (response.data.status === 'success') {
      const user = await this.userModel.findOne({ username });
      if (!user) {
        return { success: false, message: 'User not found' };
      }

      const payment = new this.paymentModel({
        amount: response.data.data.amount,
        type: response.data.data.type,
        status: response.data.data.status,
        transactionReference: txRef,
        user: user._id,
        createdAt: new Date(),
      });

      await payment.save();

      return { success: true, message: 'Payment verified and saved successfully', data: response.data };
    } else {
      return { success: false, message: 'Payment verification failed', data: response.data };
    }
  }
}
