import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    AuthModule,
    PrismaModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };