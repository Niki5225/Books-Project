import { Book } from "./book";

export interface User {
    username: string,
    email: string,
    password: string,
    books: Book[] | [],
    readBooks: Book[],
    
}