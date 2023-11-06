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

}
