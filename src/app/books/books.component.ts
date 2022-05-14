import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookManagerService } from '../book-manager.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books!: Book[];
  selectedBook?: Book;

  constructor(private manager:BookManagerService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.manager.getBooks().subscribe(books => this.books = books);
  }

  onSelect(b:Book){
    this.selectedBook=b;
  }

}
