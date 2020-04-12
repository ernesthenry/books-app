import React from 'react'
import './App.css'
import SearchList from './components/SearchList';
import MainPage from './components/MainPage'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then(books => {
      this.setState(() => ({
        books: books
      }))
    })
  }

 

  updateBookState = (shelf, book) => {
    BooksAPI.update(book, shelf)
      .then(books => {
        let newBooks = this.state.books.map(b => {
          if (book.id === b.id) {
            book.shelf = shelf
            return book;
          } else {
            return b;
          }
        })
        this.setState(() => ({
          books: newBooks
        }))
      })
  }

  addBook = (shelf, book) => {
    BooksAPI.update(book, shelf)
      .then(books => {
        BooksAPI.get(book.id)
          .then(book => {
            let newBooks = this.state.books.filter(b => b.id !== book.id);
            this.setState(() => ({
              books: [...newBooks, book]
              
            }))
          })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage changeBookState={this.updateBookState} books={this.state.books} />
        )} />
        <Route
          exact path="/search"
          render={() => (
            <SearchList books={this.state.books} changeBookState={this.addBook} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp

