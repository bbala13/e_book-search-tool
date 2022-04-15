import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BookListContainer from './features/bookList/booklistcontainer/BookListContainer';
import { getAllBooks, searchBooks } from './features/bookList/bookListSlice';
import SearchBar from './features/searchBar/SearchBar';
import { searchBarResult } from './features/searchBar/searchBarSlice';

function App() {
    const searchItem = useSelector(searchBarResult);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchBooks(searchItem));
    }, [searchItem, dispatch]);

    const books = useSelector(getAllBooks);

    return (
        <main className="App">
            <h1>Book Search Tool</h1>
            <SearchBar />
            {books.docs.map((book, index) => {
                return <li key={index}>{book.title}</li>;
            })}
            {/* <BookListContainer /> */}
        </main>
    );
}

export default App;
