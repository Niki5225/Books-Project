import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { SelectedAuthorComponent } from './selected-author/selected-author.component';


@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent,
    SelectedAuthorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [LoaderComponent, FooterComponent, SelectedAuthorComponent, ]
})
export class SharedModule { }
