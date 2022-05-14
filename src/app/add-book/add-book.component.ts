import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, Category } from '../book';
import { BookManagerService } from '../book-manager.service';
import { CategoryManagerService } from '../category-manager.service';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();
  categories!: Category[];
  selcatid:number = -1;

  constructor(private bookService:BookManagerService,
              private catService: CategoryManagerService,
              private router: Router) { }

  ngOnInit(): void {
    this.catService.getCategories().subscribe(cats => this.categories = cats);
  }

  create(){
    console.log(JSON.stringify(this.book));
    console.log(this.selcatid);
    this.bookService.addBook(this.book,this.selcatid).subscribe(p => {this.router.navigateByUrl("/books")});
  }

}
