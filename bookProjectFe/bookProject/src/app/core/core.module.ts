import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ErrorComponent,
    BooksComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [NavComponent, HomeComponent, ErrorComponent, BooksComponent, AuthorsComponent]
})
export class CoreModule { 
  
}
