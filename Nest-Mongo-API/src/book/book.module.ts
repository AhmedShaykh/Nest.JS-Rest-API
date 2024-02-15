import { Book, BookSchema } from "./schema/book.schema";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
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