import { ForbiddenException, Injectable } from "@nestjs/common";
import { CreateBookDTO, EditBookDTO } from "./DTO/book.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BookService {

    constructor(private prisma: PrismaService) { };

    getBooks(userId: string) {
        return this.prisma.book.findMany({
            where: {
                userId
            }
        });
    };

    getBookById(userId: string, bookId: number) {
        return this.prisma.book.findFirst({
            where: {
                id: bookId,
                userId
            }
        });
    };

    async createBook(userId: string, dto: CreateBookDTO) {
        const book = await this.prisma.book.create({
            data: {
                userId,
                ...dto
            }
        });

        return book;
    };

    async editBook(userId: string, bookId: number, dto: EditBookDTO) {

        const book = await this.prisma.book.findUnique({
            where: {
                id: bookId
            }
        });

        if (!book || book.userId !== userId) {

            throw new ForbiddenException("Access To Resources Denied");

        }

        return this.prisma.book.update({
            where: {
                id: bookId
            },
            data: {
                ...dto
            }
        });

    };

    async deleteBook(userId: string, bookId: number) {

        const book = await this.prisma.book.findUnique({
            where: {
                id: bookId
            }
        });

        if (!book || book.userId !== userId) {

            throw new ForbiddenException("Access To Resources Denied");

        }

        await this.prisma.book.delete({
            where: {
                id: bookId
            }
        });

    };

};