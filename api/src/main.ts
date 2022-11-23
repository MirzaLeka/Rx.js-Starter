import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.getHttpAdapter().getInstance().disable('X-Powered-By');
  app.enableCors();
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
