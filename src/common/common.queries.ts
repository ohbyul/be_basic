import { Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { COMMON } from 'src/entitys/common/common.model';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from 'sequelize';

@Injectable()
export class CommonQuery {
  constructor(
    @InjectModel(COMMON)
    private CommonModel: typeof COMMON
  ) {}


}
