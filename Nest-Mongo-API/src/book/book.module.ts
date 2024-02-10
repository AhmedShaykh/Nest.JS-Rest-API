import { Book, BookSchema } from "./schema/book.schema";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema }
    ])
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule { };