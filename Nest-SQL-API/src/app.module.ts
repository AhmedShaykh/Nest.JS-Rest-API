import { PrismaModule } from "./prisma/prisma.module";
import { BooksModule } from "./books/books.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    PrismaModule,
    BooksModule,
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };