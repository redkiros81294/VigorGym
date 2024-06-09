import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassService } from './classes.service';
import { ClassController } from './classes.controller';
import { Class, ClassSchema } from './schemas/class.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }])],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
