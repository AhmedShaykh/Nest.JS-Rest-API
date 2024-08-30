import { PrismaService } from "../prisma/prisma.service";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [
    BooksService,
    PrismaService
  ]
})
export class BooksModule { };