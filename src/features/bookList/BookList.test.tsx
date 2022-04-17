import BookList from './BookList';
import dummyBookData from '../../fixtures/dummyData/searchResults.json';
import { IDocument } from './bookListSlice';
import { render, screen } from '../../utilities/test/test-utils';

const { docs } = dummyBookData;
const myDocs = docs as IDocument[];

const renderComponentSuccess = () =>
    render(<BookList books={myDocs} />, {
        preloadedState: {
            bookList: { books: { ...dummyBookData }, status: 'success' },
        },
    });

const renderComponentError = () =>
    render(<BookList books={[]} />, {
        preloadedState: {
            bookList: { books: {}, status: 'error' },
        },
    });

describe('BookList', () => {
    test('should render book list', () => {
        renderComponentSuccess();

        expect(
            screen.getByRole('list', { name: /book list/i })
        ).toBeInTheDocument();
    });

    test('should not render books', () => {
        renderComponentError();
        const listItem = screen.queryByAltText('book cover');
        expect(listItem).not.toBeInTheDocument();
    });
});
