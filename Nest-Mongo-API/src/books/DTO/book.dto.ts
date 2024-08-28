import { IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { Category } from "../schema/book.schema";

export class CreateBookDTO {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsString()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: "Please Enter Correct Category..." })
    readonly category: Category;

    @IsEmpty({ message: "You Can't Pass User ID..." })
    readonly user: User;
};

export class UpdateBookDTO {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly author: string;

    @IsOptional()
    @IsString()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, { message: "Please Enter Correct Category..." })
    readonly category: Category;

    @IsEmpty({ message: "You Can't Pass User ID..." })
    readonly user: User;
};