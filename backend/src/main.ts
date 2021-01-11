import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const options= new DocumentBuilder()
  .setTitle("Fiscalia").setDescription("Fiscalias Crud").setVersion("1.0").build();
  const documents=SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api",app, documents);
  await app.listen(3001);
}
bootstrap();
