import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./DTO/signup.dto";
import { LoginDTO } from "./DTO/login.dto";

@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService) { };

    @Post("/signup")
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    };

    @Post("/login")
    login(@Body() loginDto: LoginDTO): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    };

};