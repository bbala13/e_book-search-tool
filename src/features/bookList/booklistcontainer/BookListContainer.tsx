import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarResult } from '../../searchBar/searchBarSlice';
import BookList from '../BookList';
import {
    booksOrderedByPublishedDate,
    booksOrderedByTitle,
    getAllBooks,
    searchBooks,
} from '../bookListSlice';
import { StyledDiv } from './BookListContainer.styles';

////https://openlibrary.org/search.json?q=the+great+gatsby&fields=title,first_publish_year,isbn,author_name

//https://openlibrary.org/api/volumes/brief/isbn/9783125372405.json

//https://openlibrary.org/search.json?q=the+great+gatsby

const BookListContainer = () => {
    const searchItem = useSelector(searchBarResult);
    const dispatch = useDispatch();
    const { docs } = useSelector(getAllBooks);

    //fetch books
    useEffect(() => {
        dispatch(searchBooks(searchItem));
    }, [searchItem, dispatch]);

    //use suspense
    const orderedByTitle = useSelector(booksOrderedByTitle);
    const recentlyPublished = useSelector(booksOrderedByPublishedDate);

    const [books, setBooks] = useState(docs);

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedOption = e.target.value;
        if (docs) {
            if (selectedOption === 'Alphabetically') {
                setBooks(orderedByTitle);
            } else if (selectedOption === 'Recently Published') {
                setBooks(recentlyPublished);
            }
        }
    };

    return (
        <StyledDiv>
            <label htmlFor="sort-books">Sort books:</label>
            <select
                id="sort-books"
                name="sort-books"
                onChange={onChangeHandler}
            >
                <option value="">Select an option</option>
                <option value="Alphabetically">Alphabetically</option>
                <option value="Recently Published">Recently published</option>
            </select>
            <BookList books={books} />
        </StyledDiv>
    );
};

export default BookListContainer;
