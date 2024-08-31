import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignUpDTO } from "./DTO/signup.dto";
import { LoginDTO } from "./DTO/login.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwtService: JwtService) { };

    async signUp(signUpDto: SignUpDTO): Promise<{ token: string }> {

        const { name, email, password } = signUpDto;

        const existingUser = await this.prisma.user.findUnique({ where: { email } });

        if (existingUser) {

            throw new BadRequestException("User Already Exists");

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        const token = this.jwtService.sign({ id: user.id });

        return { token };

    };

    async login(loginDto: LoginDTO): Promise<{ token: string }> {

        const { email, password } = loginDto;

        const user = await this.prisma.user.findUnique({ where: { email } });

        if (!user) {

            throw new UnauthorizedException("Invalid Email Or Password!");

        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {

            throw new UnauthorizedException("Invalid Email Or Password!");

        }

        const token = this.jwtService.sign({ id: user.id });

        return { token };

    };

};