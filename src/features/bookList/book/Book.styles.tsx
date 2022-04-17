import styled from 'styled-components';

export const StyledDiv = styled.li`
    border: 1px dashed var(--cool-black);

    display: flex;
    min-height: 200px;

    align-items: flex-start;
    justify-content: center;

    padding: 1rem;
    border-radius: 5px;

    @media screen and (min-width: 900px) {
        &:hover {
            box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.5);
            transform: translate(0, -10px);
            border: transparent;
            transition: all 0.4s ease;
        }
    }
`;

export const BookContents = styled.div`
    flex-grow: 1;
    text-transform: capitalize;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
        max-width: 200px;
        margin-bottom: 1rem;
    }
`;

export const ImgContainer = styled.div`
    &img {
        height: auto;
        max-width: 100%;
    }
`;

export const StyledHeadingSpan = styled.span`
    font-weight: bold;
`;

export const StyledLi = styled.li`
    padding: 0.2rem;
    width: 100%;
`;

export const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// interface StyledImgProps {
//     cover?: string;
// }
// export const StyledImg = styled.img<StyledImgProps>`

//     src: ${({ cover }) => `https://covers.openlibrary.org/b/id/${cover}-M.jpg`};
// `;

// const baseUrl = 'https://covers.openlibrary.org/b/id/';
// export const StyledImg = styled.img.attrs<StyledImgProps>((props) => ({
//     src: false ? `` : `${baseUrl}${props.cover}-M.jpg`,
// }))<StyledImgProps>``;
