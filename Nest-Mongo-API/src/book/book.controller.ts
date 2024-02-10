import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { CreateBookDto, UpdateBookDto } from "./DTO/book.dto";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {

  constructor(private readonly bookService: BookService) { };

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  };

  @Get()
  findAll() {
    return this.bookService.findAll();
  };

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookService.findOne(id);
  };

  @Put(":id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  };

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookService.remove(id);
  };

};