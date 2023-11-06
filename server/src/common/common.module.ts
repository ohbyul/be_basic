import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { CommonQuery } from './common.queries';
import { COMMON } from 'src/entitys/common/common.model';

@Module({
  imports: [SequelizeModule.forFeature([COMMON])],
  controllers: [CommonController],
  providers: [
    CommonService,
    CommonQuery,
  ],
})
export class CommonModule {}
