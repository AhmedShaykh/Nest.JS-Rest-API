import { Book, BookSchema } from "./schema/book.schema";
import { BooksController } from "./books.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksService } from "./books.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Book", schema: BookSchema }
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule { };