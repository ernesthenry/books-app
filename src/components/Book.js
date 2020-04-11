import React, { Component } from 'react';
class Book extends Component {
    render() {
        const { 
            book,
            changeBookState,
            currentReadingStyle,
            wantToReadStyle,
            readStyle,
            noneStyle
        } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => changeBookState(event.target.value, book)} >
                            <option className="moveTo" value='move'>Move to...</option>
                            <option className={currentReadingStyle} value="currentlyReading">Currently Reading</option>
                            <option className={wantToReadStyle} value="wantToRead">Want to Read</option>
                            <option className={readStyle} value="read">Read</option>
                            <option className={noneStyle} value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        )
    }
}

export default Book;