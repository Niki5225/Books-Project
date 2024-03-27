import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { UserComponent } from './user/user.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ErrorComponent,
    BooksComponent,
    AuthorsComponent,
    UserComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [NavComponent, HomeComponent, ErrorComponent, BooksComponent, AuthorsComponent, GlobalLoaderComponent]
})
export class CoreModule { 
  
}
