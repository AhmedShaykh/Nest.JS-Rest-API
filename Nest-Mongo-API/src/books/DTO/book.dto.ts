import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
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
};