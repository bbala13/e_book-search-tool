import { IDocument } from '../bookListSlice';
import { BookContents, StyledDiv, ImgContainer } from './Book.styles';
import imageNotFound from '../../../notFoundAssets/imageNotFound.jpg';

interface Props {
    title: string;
    cover: string | undefined;
    author_name: string[] | undefined;
    first_publish_year: number;
}

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
        // if (author_name.length > 1) {
        //     console.log(author_name);
        // }
    } else {
        authors = '';
    }

    //console.log(cover);let newCover = book.cover_i

    return (
        <StyledDiv>
            {/* <BookCover coverUrl={cover}></BookCover> */}
            <BookContents>
                <li>{title}</li>
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

                <li>{authors}</li>
                <li>{first_publish_year}</li>
            </BookContents>
        </StyledDiv>
    );
};

export default Book;
