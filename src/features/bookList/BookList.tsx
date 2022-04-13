import React from 'react';
import dummySearchResults from '../../fixtures/dummyData/searchResults.json';
import Book from './book/Book';
import { StyledUL } from './BookList.styles';

const BookList = () => {
    const { docs: books } = dummySearchResults;
    return (
        <StyledUL aria-label="book list">
            {books.map((book) => (
                <Book
                    key={book.key}
                    author_name={book.author_name}
                    first_publish_year={book.first_publish_year}
                    cover="https://covers.openlibrary.org/b/id/9367419-S.jpg"
                    title={book.title}
                />
            ))}
        </StyledUL>
    );
};

export default BookList;
