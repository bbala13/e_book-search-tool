import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarResult } from '../../searchBar/searchBarSlice';
import BookList from '../BookList';
import { getAllBooks, searchBooks } from '../bookListSlice';
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

    //update books
    useEffect(() => {
        setBooks(docs);
    }, [docs]);

    const [books, setBooks] = useState(docs);

    function normalizeTitle(title: string) {
        if (title[0] !== '"' && title[0] !== "'") return title;

        return title.slice(1, title.length - 1);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedOption = e.target.value;
        if (books) {
            if (selectedOption === 'Alphabetically') {
                const sortedBooks = books.slice().sort((a, b) => {
                    const normalizedA = normalizeTitle(a.title);
                    const normalizedB = normalizeTitle(b.title);
                    if (normalizedA < normalizedB) return -1;
                    if (normalizedA > normalizedB) return 1;
                    return 0;
                });
                setBooks(sortedBooks);
            } else if (selectedOption === 'Recently Published') {
                const sortedBooks = books.slice().sort((a, b) => {
                    if (a.first_publish_year > b.first_publish_year) return -1;
                    if (a.first_publish_year < b.first_publish_year) return 1;
                    return 0;
                });
                setBooks(sortedBooks);
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
