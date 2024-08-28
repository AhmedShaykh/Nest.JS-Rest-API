import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Query as ExpressQuery } from "express-serve-static-core";
import { CreateBookDTO, UpdateBookDTO } from "./DTO/book.dto";
import { BooksService } from "./books.service";
import { Book } from "./schema/book.schema";

@Controller("books")
export class BooksController {

    constructor(private booksService: BooksService) { };

    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.booksService.findAll(query);
    };

    @Post()
    async createBook(@Body() book: CreateBookDTO,): Promise<Book> {
        return this.booksService.create(book);
    };

    @Get(":id") async getBook(@Param("id") id: string): Promise<Book> {
        return this.booksService.findById(id);
    };

    @Put(":id")
    async updateBook(@Param("id") id: string, @Body() book: UpdateBookDTO): Promise<Book> {
        return this.booksService.updateById(id, book);
    };

    @Delete(":id")
    async deleteBook(@Param("id") id: string): Promise<Book> {
        return this.booksService.deleteById(id);
    };

};