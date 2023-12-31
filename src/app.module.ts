import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { COMMON } from './entitys/common/common.model';


import { CommonModule } from './common/common.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.code'],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      dialectModule: require('mysql2'),
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      timezone: "+09:00",
      synchronize: true,
      pool: {
         acquire: 10000,
         idle: 1000,
         max: 10,
         min: 5
      },
      logging: process.env.DATABASE_LOGGING == null ? false : process.env.DATABASE_LOGGING === 'true',
      models: [COMMON],
    }),
    CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
