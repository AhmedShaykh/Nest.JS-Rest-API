import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "http://localhost:8080",
      "http://localhost:3000"
    ],
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix("api");


  const options = new DocumentBuilder()
    .setTitle("Nest.JS Prisma Mongo DB API")
    .setDescription("Full Stack Nest.JS Prisma Mongo DB API")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("api", app, document);

  await app.listen(8080);

};

bootstrap();