import { render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './../../app/store';
import BookList from './BookList';
import dummyBookData from '../../fixtures/dummyData/searchResults.json';

// const renderComponent = () =>
//     render(
//         <Provider store={store}>
//             <BookList />
//         </Provider>
//     );

describe('BookList', () => {
    test('should render book list', () => {
        //renderComponent();

        expect(
            screen.getByRole('list', { name: /book list/i })
        ).toBeInTheDocument();
    });

    // test('should render books in book list', () => {
    //     renderComponent();

    //     const listItems = screen.getAllByText(/gatsby/i) as HTMLUListElement[];

    //     expect(listItems.length).toBe(dummyBookData.numFound);
    // });
});

//https://openlibrary.org/search.json?q=the+great+gatsby&fields=title,first_publish_year,isbn,author_name
