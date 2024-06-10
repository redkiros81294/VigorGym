import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassService } from './classes.service';
import { ClassController } from './classes.controller';
import { Class, ClassSchema } from './schemas/class.schema';
import { ChapaModule } from '../chapa-sdk/chapa.module';

@Module({
  imports: [  ChapaModule.register({
    secretKey: 'your-chapa-secret-key',
  }),
    MongooseModule.forFeature([{
      name: Class.name, schema: ClassSchema
    }])
  ],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
