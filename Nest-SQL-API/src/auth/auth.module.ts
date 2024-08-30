import { PrismaService } from "../prisma/prisma.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "6d" }
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService
  ]
})
export class AuthModule { };