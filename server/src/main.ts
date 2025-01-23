import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const PORT = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Shop api')
    .setDescription('The api for shop with authorezation and other.')
    .setVersion('0.2')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}

bootstrap();
