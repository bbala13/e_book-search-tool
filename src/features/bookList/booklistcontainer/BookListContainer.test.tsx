import { render, screen } from '../../../utilities/test/test-utils';
import BookListContainer from './BookListContainer';
import dummyData from '../../../fixtures/dummyData/searchResults.json';

const renderComponentSuccess = () =>
    render(<BookListContainer />, {
        preloadedState: {
            bookList: { books: { ...dummyData }, status: 'success' },
        },
    });

const renderComponentError = () =>
    render(<BookListContainer />, {
        preloadedState: {
            bookList: { books: { ...dummyData, docs: [] }, status: 'error' },
        },
    });

describe('BookListContainer', () => {
    test('should render combobox', () => {
        renderComponentSuccess();
        const comboBox = screen.getByRole('combobox');
        expect(comboBox).toBeInTheDocument();
    });

    test('should render book list', () => {
        renderComponentSuccess();

        expect(
            screen.getByRole('list', { name: /book list/i })
        ).toBeInTheDocument();
    });

    test('should not render book list', () => {
        renderComponentError();

        expect(screen.getByText('No matching results')).toBeInTheDocument();
    });
});
