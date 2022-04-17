import App from './App';
import { render, screen, within } from './utilities/test/test-utils';
import dummyData from './fixtures/dummyData/searchResults.json';

const renderComponentWithData = () =>
    render(<App />, {
        preloadedState: {
            bookList: { books: { ...dummyData }, status: 'success' },
        },
    });

// const renderComponentWithoutData = () =>
//     render(<App />, {
//         preloadedState: {},
//     });

describe('App', () => {
    test('should render title', () => {
        renderComponentWithData();
        expect(
            screen.getByRole('heading', { level: 1, name: /book search tool/i })
        ).toBeInTheDocument();
    });

    test('should render search bar', () => {
        renderComponentWithData();
        const searchBarForm = screen.getByRole('search');
        expect(searchBarForm).toBeInTheDocument();

        expect(
            within(searchBarForm).getByLabelText(/search/i)
        ).toBeInTheDocument();

        expect(
            within(searchBarForm).getByRole('button', { name: /search/i })
        ).toBeInTheDocument();
    });

    test('should render book list', () => {
        renderComponentWithData();

        expect(
            screen.getByRole('list', { name: /book list/i })
        ).toBeInTheDocument();
    });
});
