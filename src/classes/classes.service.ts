import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { Class } from './schemas/class.schema';

@Injectable()
export class ClassService {
  constructor(@InjectModel(Class.name) private classModel: Model<Class>) {}

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const newClass = new this.classModel(createClassDto);
    return newClass.save();
  }

  async findAll(): Promise<Class[]> {
    return this.classModel.find().exec();
  }

  async update(id: string, createClassDto: CreateClassDto): Promise<Class> {
    return this.classModel.findByIdAndUpdate(id, createClassDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Class> {
    return this.classModel.findByIdAndDelete(id).exec();
  }
}
