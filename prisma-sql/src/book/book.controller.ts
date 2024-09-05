import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { CreateBookDTO, EditBookDTO } from "./DTO/book.dto";
import { GetUser } from "../get-user.decorator";
import { BookService } from "./book.service";
import { JwtGuard } from "../auth/jwt.guard";

@UseGuards(JwtGuard)
@Controller("books")
export class BookController {

    constructor(private bookService: BookService) { };

    @Get()
    getBooks(@GetUser("id") userId: string) {
        return this.bookService.getBooks(userId);
    };

    @Get(":id")
    getBookById(@GetUser("id") userId: string, @Param("id", ParseIntPipe) bookId: any) {
        return this.bookService.getBookById(
            userId, bookId
        );
    };

    @Post()
    createBook(@GetUser("id") userId: string, @Body() dto: CreateBookDTO) {
        return this.bookService.createBook(
            userId, dto
        );
    };

    @Put(":id")
    editBookById(@GetUser("id") userId: string, @Param("id", ParseIntPipe) bookId: any, @Body() dto: EditBookDTO) {
        return this.bookService.editBook(
            userId, bookId, dto
        );
    };

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    deleteBook(@GetUser("id") userId: string, @Param("id", ParseIntPipe) bookId: any) {
        return this.bookService.deleteBook(
            userId, bookId
        );
    };

};