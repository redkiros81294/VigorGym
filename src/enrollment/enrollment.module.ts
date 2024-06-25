import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentSchema } from './schemas/enrollment.schema'; // Adjust the path as per your project structure

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Enrollment', schema: EnrollmentSchema }]),
    // Any other modules you might need to import
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService], // Ensure EnrollmentService is provided here
  exports: [EnrollmentService], // Export EnrollmentService if needed by other modules
})
export class EnrollmentModule {}
