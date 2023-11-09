import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Options,
  Req,
  UseGuards,
  UploadedFiles,
  Query
} from '@nestjs/common';

import { TransactionParam } from 'src/decorator/transaction.deco';

import { Transaction } from 'sequelize';
import { CommonService } from './common.service';

@Controller('api/common')
export class CommonController {
  constructor(
    private commonService: CommonService,
  ) {}

  
  /*************************************************
   * 사용자 권한 코드 리스트 조회   
   * 
   * @returns 사용자 권한 리스트
   ************************************************/
  @Get('code-list')
  async getCodeList(@Query() props,
                    @TransactionParam() transaction: Transaction) {
    return this.commonService.getCommonCodeList({props,transaction});
  }


}
