import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Book, Category } from './book';
import { BOOKS, CATEGORIES } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookManagerService {

  books: Book[] = BOOKS;
  categories: Category[] = CATEGORIES;

  constructor() { }

  public getBooks():Observable<Book[]> {
    return of(this.books);
  }

  public getBook(id: number | string) {
    return this.getBooks().pipe(
      map((books: Book[]) => books.find(book => book.id === +id))
    )
  }

  public addBook(book: Book, catid:number): Observable<any> {
    var cat = this.categories.find(ca => ca.id = catid);
    book.id = this.computeMaxId()+1;
    book.category = cat;
    this.books.push(book);
    return of(book);
  }

  private computeMaxId(): number {
    var val:number = this.books[0].id;
    for(var i = 1; i<this.books.length;i++)
      if(val < this.books[i].id){
        val = this.books[i].id;
      }
      return val;
  }
}



