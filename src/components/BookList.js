import React, { Component } from 'react';
import Book from './Book'
class BookList extends Component {
    render() {
        const {
            books = [],
            changeBookState
        } = this.props;
        const listOfBooks = books.length > 0 && books.map(book => {
            if (book.shelf === 'currentlyReading') {
                return <li key={book.id}>
                    <Book currentReadingStyle='selected' changeBookState={changeBookState} book={book} />
                </li>
            } else if (book.shelf === 'wantToRead') {
                return <li key={book.id}>
                    <Book wantToReadStyle='selected' changeBookState={changeBookState} book={book} />
                </li>
            } else if (book.shelf === "read") {
                return <li key={book.id}>
                    <Book readStyle='selected' changeBookState={changeBookState} book={book} />
                </li>
            } else {
                return <li key={book.id}>
                    <Book noneStyle='selected' changeBookState={changeBookState} book={book} />
                </li>
            }
        })
        return (
            <div className="bookshelf">
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {listOfBooks}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookList;