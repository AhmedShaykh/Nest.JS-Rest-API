import { CreateBookDto, UpdateBookDto } from "./DTO/book.dto";
import { Book, BookDocument } from "./schema/book.schema";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Query } from "express-serve-static-core";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BookService {

  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ) { };

  async findAll(query: Query): Promise<Book[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
        title: {
          $regex: query.keyword,
          $options: "i"
        }
      }
      : {};

    const books = await this.bookModel.find({ ...keyword }).limit(resPerPage).skip(skip);
    return books;
  };

  async create(book: CreateBookDto): Promise<Book> {
    const res = await this.bookModel.create(book);
    return res;
  };

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) throw new NotFoundException("Book Not Found.");
    return book;
  };

  async update(id: string, book: UpdateBookDto): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true
    });
  };

  async remove(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
  };

};