import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { normalizeTitle } from '../../../utilities/string/stringUtils';
import { searchBarResult } from '../../searchBar/searchBarSlice';
import BookList from '../BookList';
import {
    getAllBooks,
    getSortedStatus,
    searchBooks,
    sortBooks,
} from '../bookListSlice';
import SortSelect from '../sortselect/SortSelect';
import { StyledDiv } from './BookListContainer.styles';

////https://openlibrary.org/search.json?q=the+great+gatsby&fields=title,first_publish_year,isbn,author_name

//https://openlibrary.org/api/volumes/brief/isbn/9783125372405.json

//https://openlibrary.org/search.json?q=the+great+gatsby

const BookListContainer = () => {
    const searchItem = useSelector(searchBarResult);
    const dispatch = useDispatch();
    const { docs } = useSelector(getAllBooks);
    const sortedStatus = useSelector(getSortedStatus);

    //fetch books
    useEffect(() => {
        dispatch(searchBooks(searchItem));
    }, [searchItem, dispatch]);

    //update books
    useEffect(() => {
        if (docs && sortedStatus === 'Alphabetically') {
            const sortedBooks = docs.slice().sort((a, b) => {
                const normalizedA = normalizeTitle(a.title);
                const normalizedB = normalizeTitle(b.title);
                if (normalizedA < normalizedB) return -1;
                if (normalizedA > normalizedB) return 1;
                return 0;
            });
            return setBooks(sortedBooks);
        }

        if (docs && sortedStatus === 'Recently Published') {
            const sortedBooks = docs.slice().sort((a, b) => {
                if (a.first_publish_year > b.first_publish_year) return -1;
                if (a.first_publish_year < b.first_publish_year) return 1;
                return 0;
            });
            return setBooks(sortedBooks);
        }

        setBooks(docs);
    }, [docs, sortedStatus]);

    const [books, setBooks] = useState(docs);

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedOption = e.target.value;
        if (books) {
            if (selectedOption === 'Alphabetically') {
                dispatch(sortBooks(selectedOption));
            } else if (selectedOption === 'Recently Published') {
                dispatch(sortBooks(selectedOption));
            }
        }
    };

    return (
        <StyledDiv>
            <SortSelect />
            <BookList books={books} />
        </StyledDiv>
    );
};

export default BookListContainer;
