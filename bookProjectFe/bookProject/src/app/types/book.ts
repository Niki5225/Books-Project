import { Author } from "./author";
import { User } from "./user";

export interface Book {
    pk: string,
    data: BookValue

}

interface BookValue {
    nameOfTheBook: string,
    img: string,
    author: Author,
    user: User,
}
  