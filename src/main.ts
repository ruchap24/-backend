import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Professional Profile API')
    .setDescription('The Professional Profile API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORS setup
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://i2interfaces.vercel.app/',
      /\.vercel\.app$/,
    ],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();