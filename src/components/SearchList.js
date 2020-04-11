import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookList from './BookList';

class SearchList extends Component {
    state = {
        books: []
    }
    searchBooks  = (query) => {
        BooksAPI.search(query)
            .then(books => {
                if (books) {
                    for (let index = 0; index < books.length; index++) {
                        this.props.books.map(book => {
                            if (books[index].id === book.id) {
                                books[index].shelf = book.shelf;
                            }
                            return books[index]
                        })
                    }
                }
                this.setState({
                    books: books
                })
            })
    }
    render() {
        const { changeBookState } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search"  >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={(event) => {
                            this.searchBooks(event.target.value)
                        }} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList changeBookState={changeBookState} books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default SearchList;

