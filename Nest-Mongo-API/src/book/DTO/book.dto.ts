import { PartialType } from "@nestjs/mapped-types";

export class CreateBookDto {
    title: string;
    author: string;
    published: number;
};

export class UpdateBookDto extends PartialType(CreateBookDto) { };