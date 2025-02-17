import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
    .setContact(
      'Gabriel santos domiciano',
      'https://www.linkedin.com/in/gabriel-domiciano-34b0b7161/',
      'gabrield@genstudents.org',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  // Habilitando globalmente a validação de dados
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando CORS na aplicação( habilitar o front-end)
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
