import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // aplica validaciones a todas las rutas de la app
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  // integracion de Swagger para documentar la API
  const config = new DocumentBuilder()
    .setTitle('Cats example') 
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // cors para permitir peticiones desde cualquier origen
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
