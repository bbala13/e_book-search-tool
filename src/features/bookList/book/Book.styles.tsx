import styled from 'styled-components';

export const StyledDiv = styled.div`
    border: 1px solid red;
    display: flex;
    min-height: 170px;

    align-items: center;
    justify-content: center;

    padding: 1rem;
`;

//todo
export const BookCover = styled.div`
    background-image: url('https://covers.openlibrary.org/b/id/8759248-L.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3rem;
    align-self: stretch;
`;

export const BookContents = styled.div`
    flex-grow: 1;
    text-transform: capitalize;
`;
