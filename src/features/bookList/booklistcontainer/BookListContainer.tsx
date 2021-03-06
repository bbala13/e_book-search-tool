import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { normalizeTitle } from '../../../utilities/string/stringUtils';
import { searchBarResult } from '../../searchBar/searchBarSlice';
import BookList from '../BookList';
import {
    getAllBooks,
    getFetchStatus,
    getSortedStatus,
    searchBooks,
} from '../bookListSlice';
import SortSelect from '../sortselect/SortSelect';
import {
    StyledDiv,
    StyledImg,
    FlexContainer,
} from './BookListContainer.styles';
import initialSvg from '../../../assets/imgs/initial.svg';
import Pagination from '../../pagination/Pagination';
import { updateNumItemsFound } from '../../pagination/paginationSlice';

////https://openlibrary.org/search.json?q=the+great+gatsby&fields=title,first_publish_year,isbn,author_name

//https://openlibrary.org/api/volumes/brief/isbn/9783125372405.json

//https://openlibrary.org/search.json?q=the+great+gatsby

const BookListContainer = () => {
    const searchItem = useSelector(searchBarResult);
    const dispatch = useDispatch();
    const { docs, numFound } = useSelector(getAllBooks);
    const sortedStatus = useSelector(getSortedStatus);
    const fetchStatus = useSelector(getFetchStatus);

    //fetch books
    useEffect(() => {
        if (searchItem === '') return;

        dispatch(searchBooks(searchItem));
    }, [searchItem, dispatch]);

    //update books
    useEffect(() => {
        dispatch(updateNumItemsFound(numFound));

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
    }, [docs, sortedStatus, numFound, dispatch]);

    const [books, setBooks] = useState(docs);

    const noDataFound = () => {
        return (
            <p style={{ textAlign: 'center', padding: '8rem' }}>
                No matching results
            </p>
        );
    };

    const renderBookList = (status: string) => {
        if (status === 'loading') {
            return (
                <p style={{ textAlign: 'center', padding: '8rem' }}>
                    Loading Data
                </p>
            );
        } else if (status === 'success') {
            if (books.length === 0) {
                return noDataFound();
            }
            return <BookList books={books} />;
        } else if (status === 'error') {
            return noDataFound();
        } else if (status === 'initial') {
            return (
                <FlexContainer>
                    <StyledImg src={initialSvg} alt="balloons" role="img" />
                    <p style={{ marginTop: '2rem' }}>Welcome </p>
                </FlexContainer>
            );
        }
    };

    return (
        <StyledDiv>
            <SortSelect />
            {renderBookList(fetchStatus)}
            {fetchStatus === 'success' && <Pagination itemsPerPage={10} />}
        </StyledDiv>
    );
};

export default BookListContainer;
