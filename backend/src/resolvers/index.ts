import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    books: () => booksData,
  },
};
