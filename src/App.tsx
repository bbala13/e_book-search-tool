import './App.css';
import BookListContainer from './features/bookList/booklistcontainer/BookListContainer';

import SearchBar from './features/searchBar/SearchBar';

function App() {
    return (
        <main className="App">
            <h1>Book Search Tool</h1>
            <SearchBar />
            <BookListContainer />
        </main>
    );
}

export default App;
