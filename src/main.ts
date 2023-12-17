import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import 'dotenv/config'

async function bootstrap() {

  const { HOST, PORT_NEST } = process.env

  const app = await NestFactory.create(AppModule);

  app.enableCors(
    {
      origin: true,
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
      maxAge: 90
    }
  );

  await app.listen(PORT_NEST);

}
bootstrap();
