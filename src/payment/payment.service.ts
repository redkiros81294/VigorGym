// import { Injectable, Logger } from '@nestjs/common';
// import axios from 'axios';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Payment, PaymentModel } from './schemas/payment.schema';
// import { UserDocument, UserModel } from '../users/schemas/user.schema';

// @Injectable()
// export class PaymentService {
//   private readonly logger = new Logger(PaymentService.name);

//   constructor(
//     @InjectModel(PaymentModel.modelName) private paymentModel: Model<Payment>,
//     @InjectModel(UserModel.modelName) private userModel: Model<UserDocument>,
//   ) {}

//   async processPayment(paymentDto: { amount: number; type: string; username: string }) {
//     try {
//       const response = await axios.post('https://api.chapa.co/v1/transaction/initialize', {
//         amount: paymentDto.amount,
//         currency: 'ETB',
//         email: 'ab1rham5ethiopian@gmail.com', // Replace with user's email
//         callback_url: 'http://localhost:3000/payment/verify',
//         tx_ref: `tx_ref_${Date.now()}`,
//       });

//       this.logger.log('Payment initialization response:', response.data);

//       if (response.data.status === 'success') {
//         return { success: true, message: 'Payment initialized successfully', data: response.data };
//       } else {
//         this.logger.error('Payment initialization failed:', response.data);
//         return { success: false, message: 'Payment initialization failed', data: response.data };
//       }
//     } catch (error) {
//       this.logger.error('Error processing payment:', error);
//       return { success: false, message: 'Payment processing failed' };
//     }
//   }

//   async verifyPayment(txRef: string, username: string) {
//     try {
//       const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${txRef}`);
//       this.logger.log('Payment verification response:', response.data);

//       if (response.data.status === 'success') {
//         const user = await this.userModel.findOne({ username });
//         if (!user) {
//           this.logger.error('User not found for username:', username);
//           return { success: false, message: 'User not found' };
//         }

//         const payment = new this.paymentModel({
//           amount: response.data.data.amount,
//           type: response.data.data.type,
//           status: response.data.data.status,
//           transactionReference: txRef,
//           user: user._id,
//           createdAt: new Date(),
//         });

//         await payment.save();

//         return { success: true, message: 'Payment verified and saved successfully', data: response.data };
//       } else {
//         this.logger.error('Payment verification failed:', response.data);
//         return { success: false, message: 'Payment verification failed', data: response.data };
//       }
//     } catch (error) {
//       this.logger.error('Error verifying payment:', error);
//       return { success: false, message: 'Payment verification failed' };
//     }
//   }
// }


import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentModel } from './schemas/payment.schema';
import { UserDocument, UserModel } from '../users/schemas/user.schema';
import { ChapaService } from 'chapa-nestjs';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    @InjectModel(PaymentModel.modelName) private paymentModel: Model<Payment>,
    @InjectModel(UserModel.modelName) private userModel: Model<UserDocument>,
    private readonly chapaService: ChapaService,
  ) {}

  async processPayment(paymentDto: { amount: number; type: string; user: User }) {
    try {
      const tx_ref = await this.chapaService.generateTransactionReference();

      const response = await this.chapaService.initialize({
        first_name: paymentDto.user.firstName,
        last_name: paymentDto.user.lastName,
        email: paymentDto.user.email,
        currency: 'ETB',
        amount: paymentDto.amount.toString(),
        tx_ref: tx_ref,
        callback_url: 'http://localhost:3000/payment/verify',
        return_url: 'http://localhost:3000/payment/success',
        customization: {
          title: 'Payment for ' + paymentDto.type,
          description: 'Payment transaction',
        },
      });

      this.logger.log('Payment initialization response:', response);

      if (response.status === 'success') {
        return { success: true, message: 'Payment initialized successfully', data: response.data };
      } else {
        this.logger.error('Payment initialization failed:', response);
        return { success: false, message: 'Payment initialization failed', data: response };
      }
    } catch (error) {
      this.logger.error('Error processing payment:', error);
      return { success: false, message: 'Payment processing failed' };
    }
  }

  async verifyPayment(txRef: string, user: User) {
    try {
      const response = await this.chapaService.verify({ tx_ref: txRef });
      this.logger.log('Payment verification response:', response);

      if (response.status === 'success') {
        const payment = new this.paymentModel({
          amount: parseFloat(response.data.amount),
          type: response.data.type,
          status: response.data.status,
          transactionReference: txRef,
          user: user.username, // Use username
          createdAt: new Date(),
        });

        await payment.save();

        return { success: true, message: 'Payment verified and saved successfully', data: response.data };
      } else {
        this.logger.error('Payment verification failed:', response);
        return { success: false, message: 'Payment verification failed', data: response };
      }
    } catch (error) {
      this.logger.error('Error verifying payment:', error);
      return { success: false, message: 'Payment verification failed' };
    }
  }
}
