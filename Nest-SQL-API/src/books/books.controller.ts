import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateBookDTO, UpdateBookDTO } from "./DTO/book.dto";
import { BooksService } from "./books.service";
import { Book } from "@prisma/client";

@Controller("books")
export class BooksController {

    constructor(private readonly booksService: BooksService) { };

    @Get()
    async getAllBooks() {
        return this.booksService.findAll();
    };

    @Post()
    async createBook(@Body() book: CreateBookDTO): Promise<Book> {
        return this.booksService.create(book);
    };

    @Get(":id")
    async getBook(@Param("id") id: string): Promise<Book> {
        return this.booksService.findById(+id);
    };

    @Put(":id")
    async updateBook(@Param("id") id: string, @Body() book: UpdateBookDTO): Promise<Book> {
        return this.booksService.update(+id, book);
    };

    @Delete(":id")
    async deleteBook(@Param("id") id: string): Promise<Book> {
        return this.booksService.delete(+id);
    };

};