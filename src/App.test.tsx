import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const renderComponent = () =>
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

describe('App', () => {
    test('should render title', () => {
        renderComponent();
        expect(
            screen.getByRole('heading', { level: 1, name: /book search tool/i })
        ).toBeInTheDocument();
    });

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
