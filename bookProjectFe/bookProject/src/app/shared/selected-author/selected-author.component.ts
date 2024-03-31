import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAuthorBooksService } from 'src/app/services/author-services/get-author-books.service';
import { Book } from 'src/app/types/book';
import { HelperFunctionsService } from '../helper-functions.service';

@Component({
  selector: 'app-selected-author',
  templateUrl: './selected-author.component.html',
  styleUrls: ['./selected-author.component.css']
})
export class SelectedAuthorComponent implements OnInit{
  authorBooks: Book[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private getAuthorBooksService: GetAuthorBooksService,
    private helperFunctions: HelperFunctionsService,
  ) { }


    ngOnInit(): void {
        this.getInfoAuthorBooks();
    }

  private getInfoAuthorBooks(): void {
    const authorName: string = this.activatedRoute.snapshot.url[1].path;

    this.getAuthorBooksService.getParticularAuthorBooks(authorName).subscribe(
      (data) => {
        let dataInfo = data['books'];        
        this.authorBooks = this.helperFunctions.fillTheBooks(dataInfo);
      })
  }
}

// TODO: fix this mess 