import SingleBook from './book/Book';
import { StyledUL } from './BookList.styles';

import { IDocument } from './bookListSlice';

interface BookListProps {
    books: IDocument[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <StyledUL aria-label="book list">
            {books &&
                books.map((book) => {
                    return (
                        <SingleBook
                            key={Math.random()}
                            author_name={book.author_name}
                            first_publish_year={book.first_publish_year}
                            cover_i={book.cover_i}
                            title={book.title}
                        />
                    );
                })}
        </StyledUL>
    );
};

export default BookList;
