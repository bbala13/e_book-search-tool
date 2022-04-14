import BookList from '../BookList';
import { StyledDiv } from './BookListContainer.styles';

////https://openlibrary.org/search.json?q=the+great+gatsby&fields=title,first_publish_year,isbn,author_name

//https://openlibrary.org/api/volumes/brief/isbn/9783125372405.json

//https://openlibrary.org/search.json?q=the+great+gatsby

const BookListContainer = () => {
    return (
        <StyledDiv>
            <BookList />
        </StyledDiv>
    );
};

export default BookListContainer;
