import React from 'react';
import BookList from '../BookList';
import { StyledDiv } from './BookListContainer.styles';

const BookListContainer = () => {
    return (
        <StyledDiv>
            <BookList />
        </StyledDiv>
    );
};

export default BookListContainer;
