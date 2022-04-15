import SingleBook from './book/Book';
import { StyledUL } from './BookList.styles';
import imageNotFound from '../../notFoundAssets/imageNotFound.jpg';

import { IDocument } from './bookListSlice';
import { StyledNotFoundImage } from './book/Book.styles';

interface BookListProps {
    books: IDocument[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <StyledUL aria-label="book list">
            {books &&
                books.map((book) => {
                    let newCover = book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
                        : imageNotFound;

                    return (
                        <SingleBook
                            key={Math.random()}
                            author_name={book.author_name}
                            first_publish_year={book.first_publish_year}
                            cover_i={newCover}
                            title={book.title}
                        />
                    );
                })}
        </StyledUL>
    );
};

export default BookList;
