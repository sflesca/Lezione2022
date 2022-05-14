export class Category {
  id!: number;
  name!:string;
}

export class Book {
  id!:number;
  title!:string;
  authors!:string;
  price!:number;
  category?:Category;
}
