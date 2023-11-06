import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //인터셉터 전역 선언
  // 

  //PayloadTooLargeError 용량 키움
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.enableCors();

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
