import axios from 'axios';

const server = 'http://localhost:3001';

const API = {
  googleBooks(search) {
    return axios.get(`${server}/search/${search}`);
  },
  savedBooks() {
    return axios.get(`${server}/api/books`);
  },
  saveNewBook(book) {
    return axios.post(`${server}/api/books`, {
      google: book.id,
      title: book.title,
      authors: book.authors,
      image: book.thumbnail,
      link: book.infoLink,
      description: book.description,
    });
  },
  deleteBook(id) {
    return axios.delete(`${server}/api/books/${id}`);
  },
};

export default API;
