import { CreateBookDto, UpdateBookDto } from "./DTO/book.dto";
import { BookService } from "./book.service";
import { Book } from "./schema/book.schema";
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query
} from "@nestjs/common";
import { Query as ExpressQuery } from "express-serve-static-core";

@Controller("book")
export class BookController {

  constructor(private readonly bookService: BookService) { };

  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  };

  @Post()
  async create(@Body() book: CreateBookDto): Promise<Book> {
    return this.bookService.create(book);
  };

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Book> {
    return this.bookService.findOne(id);
  };

  @Put(":id")
  update(@Param("id") id: string, @Body() book: UpdateBookDto) {
    return this.bookService.update(id, book);
  };

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<Book> {
    return this.bookService.remove(id);
  };

};