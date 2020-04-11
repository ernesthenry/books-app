import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

class MainPage extends Component {
    render() {
        const { books = [], changeBookState } = this.props;
        const CurrentReadingBooks = books.length > 0 && books.filter(book => book.shelf === "currentlyReading");
        const WantToReadBooks = books.length > 0 && books.filter(book => book.shelf === "wantToRead");
        const ReadBooks = books.length > 0 && books.filter(book => book.shelf === "read");
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bookshelf</h1>
                </div >
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <BookList changeBookState={changeBookState} books={CurrentReadingBooks} />
                        </div>
                        <div className="bookshelf">

                            <h2 className="bookshelf-title">Want to Read</h2>
                            <BookList changeBookState={changeBookState} books={WantToReadBooks} />

                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <BookList changeBookState={changeBookState} books={ReadBooks} />
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' >Add a book</Link>
                </div>
            </div >
        )
    }
}

export default MainPage;