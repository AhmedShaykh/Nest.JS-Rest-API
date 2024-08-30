import { PrismaService } from "../prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BooksService {

    constructor(private prisma: PrismaService) { };

    async findAll() {
        return this.prisma.book.findMany();
    };

    async create(createBookDTO: any) {
        return this.prisma.book.create({
            data: createBookDTO
        });
    };

    async findById(id: number) {
        return this.prisma.book.findUnique({
            where: {
                id
            }
        });
    };

    async update(id: number, updateBookDTO: any) {
        return this.prisma.book.update({
            where: {
                id
            },
            data: updateBookDTO
        });
    };

    async delete(id: number) {
        return this.prisma.book.delete({
            where: {
                id
            }
        });
    };

};