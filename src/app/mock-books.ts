import { Book, Category } from './book';

export const BOOKS: Book[] = [
  {
    id: 0,
    title: 'bho',
    authors: 'aaa, bbb',
    price: 4.3,
    category: {
      id: 0,
      name: 'Gialli',
    },
  },
  {
    id: 1,
    title: 'bho',
    authors: 'aaa, bbb',
    price: 4.3,
    category: {
      id: 0,
      name: 'Gialli',
    },
  },
  {
    id: 2,
    title: 'xxxx',
    authors: 'aaa, bbb',
    price: 9.99,
    category: {
      id: 0,
      name: 'Gialli',
    },
  },
  {
    id: 3,
    title: 'yyyy',
    authors: 'aaa, bbb',
    price: 9.99,
    category: {
      id: 1,
      name: 'Romanzi',
    },
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 0,
    name: 'Gialli',
  },
  {
    id: 1,
    name: 'Romanzi',
  },
];
