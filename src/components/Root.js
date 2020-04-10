import React, { Component } from "react";
import { Link } from "react-router-dom";


import * as BooksAPI from "../BooksAPI";

import Shelf from "./BookShelf";

class Root extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  };

  render() {
    const { books } = this.state;

    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookshelf</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            title="Currently Reading"
            books={currentlyReading}
            onSortingBook={this.getAllBooks}
          />
          <Shelf
            title="Want to Read"
            books={wantToRead}
            onSortingBook={this.getAllBooks}
          />
          <Shelf
            title="Read"
            books={read}
            onSortingBook={this.getAllBooks}
          />
        </div>
        <Link className="open-search" to="/search" />
      </div>
    );
  }
}

export default Root;
