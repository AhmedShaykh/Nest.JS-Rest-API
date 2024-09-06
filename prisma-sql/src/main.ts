import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      "http://localhost:8080",
      "http://localhost:8000"
    ],
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix("api");


  const options = new DocumentBuilder()
    .setTitle("Your API")
    .setDescription("API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("api", app, document);

  await app.listen(8000);

};

bootstrap();