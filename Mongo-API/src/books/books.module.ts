import { BooksController } from "./books.controller";
import { BookSchema } from "./schema/book.schema";
import { AuthModule } from "../auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksService } from "./books.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: "Book", schema: BookSchema }
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule { };