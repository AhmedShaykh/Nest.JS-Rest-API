import { UserSchema } from "./schemas/user.schema";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>("JWT_SECRET"),
          signOptions: {
            expiresIn: config.get<string | number>("JWT_EXPIRES")
          }
        }
      }
    }),
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { };