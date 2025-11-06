import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Update CORS for production
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://your-app-name.vercel.app', 
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