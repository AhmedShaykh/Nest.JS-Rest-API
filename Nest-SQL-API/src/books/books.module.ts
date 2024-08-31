import { PrismaService } from "../prisma/prisma.service";
import { BooksController } from "./books.controller";
import { AuthModule } from "../auth/auth.module";
import { BooksService } from "./books.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [AuthModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    PrismaService
  ]
})
export class BooksModule { };