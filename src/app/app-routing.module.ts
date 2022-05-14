import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:id',      component: UpdateBookComponent},
  { path: 'addbook',      component: AddBookComponent },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
