// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from './schemas/user.schema';

// @Injectable()
// export class UsersService {
//   constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

//   async findAll(): Promise<User[]> {
//     return this.userModel.find().exec();
//   }

//   async findOneById(id: string): Promise<User | null> {
//     return this.userModel.findById(id).exec();
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface'; // Ensure this interface is defined correctly

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOneById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async findOneByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
