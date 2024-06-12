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
import * as bcrypt from 'bcryptjs';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(username: string, password: string, email: string, firstName: string, lastName: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, password: hashedPassword, email, firstName, lastName });
    return newUser.save();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.findByUsername(username);
    if (user) {
      return bcrypt.compare(password, user.password);
    }
    return false;
  }
  
  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
