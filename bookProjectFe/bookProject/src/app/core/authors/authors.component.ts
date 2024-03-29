import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetAuthorBooksService } from 'src/app/services/author-services/get-author-books.service';
import { GetAuthorsService } from 'src/app/services/author-services/get-authors.service';
import { GlobalLoaderService } from 'src/app/services/global-loader/global-loader.service';
import { Author } from 'src/app/types/author';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors: Author[] = [];

  constructor(private authorService: GetAuthorsService, 
    private getParticularAuthorBooks: GetAuthorBooksService,
    public globalLoader: GlobalLoaderService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.globalLoader.showLoader();
    this.fetchAuthors()
    this.globalLoader.hideLoader();
  }

  fetchAuthors() {
    this.authorService.getAuthors().subscribe(
      (data: any) => { // Specify the type of data
        this.authors = this.fillAuthors(data.authors);
      },
      (error: string) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  private fillAuthors(authorObj: any) {
    let authors: Author[] = []
    for (const key in authorObj) {
      let author: Author = { pk: key, authorName: authorObj[key].authorName, img: authorObj[key].img }
      authors.push(author)
    }

    return authors
  }

  // private clickedAuthor(authorName: string){
  //   const authorsParticularBooks = this.getParticularAuthorBooks.getAllBooksFunc(authorName);
  // }

  public navToAuthorBooks(authorName: string) {
    const currentUrl = this.router.url;
    const path = authorName;
    const newPath = currentUrl + `/${path}`;
    this.router.navigate([newPath]);
  }
}