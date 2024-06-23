
import { Module } from '@nestjs/common';
import { ChapaClientController } from './chapa-client.controller';
import { ChapaModule } from '../chapa-sdk/chapa.module';

@Module({
  controllers: [ChapaClientController],
  imports: [
    ChapaModule.register({
      secretKey: 'CHAPUBK_TEST-kgwii0waGksr2iAVqk10sBPErqICvYmn',
    }),
  ],
})
export class ChapaClientModule {}
