import { BooksModule } from "./books/books.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL
    ),
    BooksModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };