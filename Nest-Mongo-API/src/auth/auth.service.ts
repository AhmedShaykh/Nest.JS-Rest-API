import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SignUpDto } from "./DTO/signup.dto";
import { User } from "./schemas/user.schema";
import { LoginDTO } from "./DTO/login.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { Model } from "mongoose";

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name)
    private userModel: Model<User>,
        private jwtService: JwtService
    ) { };

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {

        const { name, email, password } = signUpDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        });

        const token = this.jwtService.sign({ id: user._id });

        return { token };

    };

    async login(loginDto: LoginDTO): Promise<{ token: string }> {

        const { email, password } = loginDto;

        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new UnauthorizedException("Invalid Email Or Password!");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
            throw new UnauthorizedException("Invalid Email Or Password!");
        }

        const token = this.jwtService.sign({ id: user._id });

        return { token };

    };

};