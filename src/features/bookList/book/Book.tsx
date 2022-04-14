import React from 'react';
import { BookContents, BookCover, StyledDiv } from './Book.styles';

interface Props {
    title: string;
    cover: string | undefined;
    author_name: string[] | undefined;
    first_publish_year: number;
    isbn: string | undefined;
}

const Book = ({
    title,
    cover,
    author_name,
    first_publish_year,
    isbn,
}: Props) => {
    //guard for author name; todo
    let authors: string;
    if (author_name) {
        authors = author_name.join(', ');
        // if (author_name.length > 1) {
        //     console.log(author_name);
        // }
    } else {
        authors = '';
    }

    //console.log(cover);

    return (
        <StyledDiv>
            {/* <BookCover coverUrl={cover}></BookCover> */}
            <BookContents>
                <li>{title}</li>
                <img src={cover} alt="book cover" title={title} />
                <li>{authors}</li>
                <li>{first_publish_year}</li>
                <li>{isbn}</li>
            </BookContents>
        </StyledDiv>
    );
};

export default Book;
