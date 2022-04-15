import styled from 'styled-components';
import imageNotFound from '../../../notFoundAssets/imageNotFound.jpg';

export const StyledDiv = styled.div`
    border: 1px solid red;
    display: flex;
    min-height: 200px;

    align-items: center;
    justify-content: center;

    padding: 1rem;
`;

//todo
interface BookCoverProps {
    coverUrl: string | undefined;
}
export const BookCover = styled.div<BookCoverProps>`
    background-image: ${({ coverUrl }) => `url(${coverUrl})`};
    background-repeat: no-repeat;
    background-size: contain;
    padding: 3rem;
    align-self: stretch;
`;

export const BookContents = styled.div`
    flex-grow: 1;
    text-transform: capitalize;
    padding: 0.5rem;
`;

export const StyledNotFoundImage = styled.img`
    src: url(${imageNotFound});
    height: 100px;
`;
