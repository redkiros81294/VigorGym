
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InitializeOptions } from '../chapa-sdk/interfaces/initialize.interface';
import { VerifyOptions } from '../chapa-sdk/interfaces/verify.interface';
import { ChapaService } from '../chapa-sdk/chapa.service';
import { CreateSubaccountOptions } from 'src/chapa-sdk';

@Controller()
export class ChapaClientController {
  constructor(private readonly chapaService: ChapaService) {}

  @Post('initialize')
  async initialize(@Body() initializeOptions: InitializeOptions) {
    const tx_ref = await this.chapaService.generateTransactionReference();
    return this.chapaService.initialize({
      ...initializeOptions,
      tx_ref,
    });
  }

  @Get('verify/:tx_ref')
  verify(@Param() verifyOptions: VerifyOptions) {
    return this.chapaService.verify(verifyOptions);
  }

  @Post('subaccount')
  createSubaccount(@Body() createSubaccountOptions: CreateSubaccountOptions) {
    return this.chapaService.createSubaccount(createSubaccountOptions);
  }
}
