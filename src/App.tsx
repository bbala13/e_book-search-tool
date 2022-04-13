import './App.css';
import BookList from './features/bookList/BookList';
import BookListContainer from './features/bookList/booklistcontainer/BookListContainer';
import SearchBar from './features/searchBar/SearchBar';

function App() {
    return (
        <div className="App">
            <h1>Book Search Tool</h1>
            <SearchBar />
            <BookListContainer />
        </div>
    );
}

export default App;
