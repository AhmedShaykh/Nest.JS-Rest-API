import "dotenv/config";
import { BookModule } from "./book/book.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    BookModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule { };