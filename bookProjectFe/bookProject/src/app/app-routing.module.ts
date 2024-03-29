import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/error/error.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthorsComponent } from './core/authors/authors.component';
import { BooksComponent } from './core/books/books.component';
import { UserComponent } from './core/user/user.component';
import { SelectedAuthorComponent } from './shared/selected-author/selected-author.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'error-found', component: ErrorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'authors/:authorName', component: SelectedAuthorComponent},
  {path: 'books', component: BooksComponent},
  {path: 'user/detail/:id', component: UserComponent},
  {path: '**', redirectTo: 'error-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
