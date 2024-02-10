import { CreateBookDto, UpdateBookDto } from "./DTO/book.dto";
import { Book, BookDocument } from "./schema/book.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BookService {

  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ) { };

  create(createBookDto: CreateBookDto): Promise<Book> {
    const model = new this.bookModel(createBookDto);
    return model.save();
  };

  findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  };

  findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  };

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel.updateOne({ _id: id }, {
      title: updateBookDto.title,
      author: updateBookDto.author,
      published: updateBookDto.published
    }).exec();
  };

  remove(id: string) {
    return this.bookModel.deleteOne({ _id: id }).exec();
  };

};