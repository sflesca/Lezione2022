import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Category } from './book';
import { CATEGORIES } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagerService {

  categories: Category[] = CATEGORIES;

  constructor() { }

  public getCategories():Observable<Category[]>{
    return of(this.categories);
  }

  getCategoryById(id:number | string){
    return this.getCategories().pipe(
      map((cats: Category[]) => cats.find(cat => cat.id === +id))
    )
  }
}
