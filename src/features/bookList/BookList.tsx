import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalContainer } from '../../globalStyles';
import { getCurrentPage, getItemsPerPage } from '../pagination/paginationSlice';
import SingleBook from './book/Book';
import { StyledUL } from './BookList.styles';

import { IDocument } from './bookListSlice';

interface BookListProps {
    books: IDocument[];
}

const BookList = ({ books }: BookListProps) => {
    const currentIndex = useSelector(getCurrentPage);
    const itemsPerPage = useSelector(getItemsPerPage);

    const [numBooks, setNumBooks] = useState<IDocument[]>([]);

    useEffect(() => {
        const start = (currentIndex - 1) * itemsPerPage;
        const end = itemsPerPage * currentIndex;
        const copy = [...books];
        setNumBooks(copy.slice(start, end));
    }, [books, currentIndex, itemsPerPage]);

    return (
        <GlobalContainer>
            <StyledUL aria-label="book list">
                {numBooks.map((book, index) => {
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
