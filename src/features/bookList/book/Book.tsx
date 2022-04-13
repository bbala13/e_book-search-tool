import React from 'react';
import { BookContents, BookCover, StyledDiv } from './Book.styles';

interface Props {
    title: string;
    cover: string | undefined;
    author_name: string[] | undefined;
    first_publish_year: number;
}

const Book = ({ title, cover, author_name, first_publish_year }: Props) => {
    //todo
    let authors: string;
    if (author_name) {
        authors = author_name.join(', ');
        if (author_name.length > 1) {
            console.log(author_name);
        }
    } else {
        authors = 'N/A';
    }

    return (
        <StyledDiv>
            <BookCover></BookCover>
            <BookContents>
                <li>{title}</li>
                <img src={cover} alt="book cover" />
                <li>{authors}</li>
                <li>{first_publish_year}</li>
            </BookContents>
        </StyledDiv>
    );
};

export default Book;
