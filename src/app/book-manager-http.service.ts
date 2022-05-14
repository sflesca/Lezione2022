import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Book } from './book';
import { BookManagerService } from './book-manager.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookManagerHTTPService extends BookManagerService{

  private bookuri = "http://localhost:8080/rest/book";

  constructor(private http: HttpClient) { super()}

  public override getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.bookuri + '/all?start=0&max=10').pipe(
      tap(books => this.books = books),
      catchError(this.handleError('getBooks', []))
    );
  }

  public override getBook(id: string | number): Observable<Book> {
    return this.http.get<Book>(this.bookuri + "/one/" + id);
  }

  public override addBook(book: Book, catid:number): Observable<any> {
    return this.http.post<Book>(this.bookuri+"/create/"+catid, book, httpOptions).pipe(
      tap((b:Book) => this.books.push(b)),
      catchError(this.handleError('addProdotto', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}
