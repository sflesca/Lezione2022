import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagerService } from './book-manager.service';
import { BooksComponent } from './books/books.component';
import { BookRowComponent } from './book-row/book-row.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookManagerHTTPService } from './book-manager-http.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookRowComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    AddBookComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: BookManagerService, useClass: BookManagerHTTPService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
