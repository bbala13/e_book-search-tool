import { Container, StyledMain } from './App.styles';
import BookListContainer from './features/bookList/booklistcontainer/BookListContainer';

import SearchBar from './features/searchBar/SearchBar';

function App() {
    return (
        <StyledMain>
            <Container>
                <h1>Book Search Tool</h1>
                <SearchBar />
            </Container>
            <BookListContainer />
        </StyledMain>
    );
}

export default App;
