import SingleBook from './book/Book';
import { StyledUL } from './BookList.styles';
import imageNotFound from '../../notFoundAssets/imageNotFound.jpg';

import { IDocument } from './bookListSlice';

interface BookListProps {
    books: IDocument[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <StyledUL aria-label="book list">
            {books &&
                books.map((book) => {
                    //guard book isbn
                    let cover = book.isbn
                        ? `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
                        : imageNotFound;
                    //?default=false
                    if (!book.isbn) {
                        console.log('not', book);
                    }

                    if (book.isbn) {
                        if (book.isbn[0] === '9798795318738') {
                            console.log(book);
                        }
                    }

                    const singleISBN = book.isbn ? book.isbn[0] : 'error';

                    return (
                        <SingleBook
                            key={Math.random()}
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
