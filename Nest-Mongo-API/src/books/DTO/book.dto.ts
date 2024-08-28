import { Category } from "../schema/book.schema";

export class CreateBookDTO {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
};

export class UpdateBookDTO {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
};