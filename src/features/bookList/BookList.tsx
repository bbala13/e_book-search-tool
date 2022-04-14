import React from 'react';
import dummySearchResults from '../../fixtures/dummyData/searchResults.json';
import Book from './book/Book';
import { StyledUL } from './BookList.styles';
import imageNotFound from '../../notFoundAssets/imageNotFound.jpg';

const BookList = () => {
    const { docs: books } = dummySearchResults;
    return (
        <StyledUL aria-label="book list">
            {books.map((book) => {
                //guard book isbn
                const cover = book.isbn
                    ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
                    : '';

                if (!book.isbn) {
                    console.log('not', cover);
                }
                const singleISBN = book.isbn ? book.isbn[0] : '';
                //console.log(cover);
                return (
                    <Book
                        key={book.key}
                        author_name={book.author_name}
                        first_publish_year={book.first_publish_year}
                        cover={cover}
                        title={book.title}
                        isbn={singleISBN}
                    />
                );
            })}
        </StyledUL>
    );
};

export default BookList;
