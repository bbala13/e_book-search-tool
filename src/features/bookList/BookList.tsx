import { GlobalContainer } from '../../globalStyles';
import SingleBook from './book/Book';
import { StyledUL } from './BookList.styles';

import { IDocument } from './bookListSlice';

interface BookListProps {
    books: IDocument[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <GlobalContainer>
            <StyledUL aria-label="book list">
                {books &&
                    books.map((book, index) => {
                        return (
                            <SingleBook
                                key={index}
                                author_name={book.author_name}
                                first_publish_year={book.first_publish_year}
                                cover_i={book.cover_i}
                                title={book.title}
                            />
                        );
                    })}
            </StyledUL>
        </GlobalContainer>
    );
};

export default BookList;
