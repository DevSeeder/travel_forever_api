import {
  CustomErrorExceptionFilter,
  HttpExceptionFilter
} from '@devseeder/microservices-exceptions';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './microservice/application/module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const configService = app.get<ConfigService>(ConfigService);

  const adapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(adapterHost));
  app.useGlobalFilters(new CustomErrorExceptionFilter(adapterHost));

  await app.listen(configService.get<string>('api.port'));
}
bootstrap();
