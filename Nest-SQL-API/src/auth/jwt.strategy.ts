import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        });
    };

    async validate(payload) {

        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.id
            }
        });

        if (!user) {

            throw new UnauthorizedException("Login First To Access This Endpoint...");

        }

        return user;

    };

};