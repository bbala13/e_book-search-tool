import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './../../app/store';
import SearchBar from './SearchBar';

const renderComponent = () =>
    render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    );

describe('SearchBar', () => {
    test('should render search bar', () => {
        renderComponent();
        const searchBarForm = screen.getByRole('search');
        expect(searchBarForm).toBeInTheDocument();

        expect(
            within(searchBarForm).getByLabelText(/search/i)
        ).toBeInTheDocument();

        expect(
            within(searchBarForm).getByRole('button', { name: /search/i })
        ).toBeInTheDocument();
    });
});
