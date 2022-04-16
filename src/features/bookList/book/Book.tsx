import { IDocument } from '../bookListSlice';
import {
    BookContents,
    StyledDiv,
    ImgContainer,
    StyledHeadingSpan,
    StyledLi,
    StyledUL,
} from './Book.styles';
import imageNotFound from '../../../notFoundAssets/imageNotFound.jpg';

const Book = ({
    title,
    cover_i,
    author_name,
    first_publish_year,
}: IDocument) => {
    //guard for author name; todo
    let authors: string;
    if (author_name) {
        authors = author_name.join(', ');
    } else {
        authors = '';
    }

    return (
        <StyledDiv>
            {/* <BookCover coverUrl={cover}></BookCover> */}
            <BookContents>
                {cover_i ? (
                    <img
                        src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                        alt="book cover"
                        title={title}
                    />
                ) : (
                    <ImgContainer>
                        <img
                            src={imageNotFound}
                            alt="book cover"
                            title={title}
                            style={{ height: '150px' }}
                        />
                    </ImgContainer>
                )}

                <StyledUL>
                    <StyledLi>
                        <StyledHeadingSpan>Title:</StyledHeadingSpan> {title}
                    </StyledLi>
                    <StyledLi>
                        <StyledHeadingSpan>Author:</StyledHeadingSpan> {authors}
                    </StyledLi>
                    <StyledLi>
                        <StyledHeadingSpan>Published Year:</StyledHeadingSpan>{' '}
                        {first_publish_year}
                    </StyledLi>
                </StyledUL>
            </BookContents>
        </StyledDiv>
    );
};

export default Book;
