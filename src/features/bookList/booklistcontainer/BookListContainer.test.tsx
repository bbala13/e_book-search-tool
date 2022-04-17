import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import BookListContainer from './BookListContainer';

const renderComponent = () =>
    render(
        <Provider store={store}>
            <BookListContainer />
        </Provider>
    );

describe('BookListContainer', () => {
    test('should render combobox', () => {
        renderComponent();
        const comboBox = screen.getByRole('combobox');
        expect(comboBox).toBeInTheDocument();
    });

    test('should render book list', () => {
        renderComponent();

        expect(
            screen.getByRole('list', { name: /book list/i })
        ).toBeInTheDocument();
    });

    // test('should not render book list', () => {
    //     const renderComponent = () => {
    //         render(
    //             <Provider store={configureStore({ reducer: {} })}>
    //                 <BookListContainer />
    //             </Provider>
    //         );
    //     };

    //     renderComponent();

    //     expect(screen.getByText('No matching results/i')).toBeInTheDocument();
    // });
});
