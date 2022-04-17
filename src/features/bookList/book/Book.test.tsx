import { render, screen } from '@testing-library/react';
import Book from './Book';
import dummyData from '../../../fixtures/dummyData/searchResults.json';
import { IDocument } from '../bookListSlice';

const { docs } = dummyData;
const { author_name, first_publish_year, title, cover_i } =
    docs[0] as IDocument;

const renderComponent = () =>
    render(
        <Book
            author_name={author_name}
            first_publish_year={first_publish_year}
            title={title}
            cover_i={cover_i}
        />
    );

describe('Book', () => {
    test('should render book', () => {
        renderComponent();
        const book = screen.getByAltText('book cover');
        expect(book).toBeInTheDocument();
    });
});
