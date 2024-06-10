
import { Module } from '@nestjs/common';
import { ChapaClientController } from './chapa-client.controller';
import { ChapaModule } from '../chapa-sdk/chapa.module';

@Module({
  controllers: [ChapaClientController],
  imports: [
    ChapaModule.register({
      secretKey: 'your-chapa-secret-key',
    }),
  ],
})
export class ChapaClientModule {}
