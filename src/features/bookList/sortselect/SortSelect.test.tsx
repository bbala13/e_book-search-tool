import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import SortSelect from './SortSelect';

const renderComponent = () =>
    render(
        <Provider store={store}>
            <SortSelect />
        </Provider>
    );

const currentOptions = [
    'Select an option',
    'Alphabetically',
    'Recently Published',
];

describe('SortSelect', () => {
    test('should render combobox', () => {
        renderComponent();
        const comboBox = screen.getByRole('combobox');
        expect(comboBox).toBeInTheDocument();
    });

    test('should render combobox options', () => {
        renderComponent();

        const options = screen.getAllByRole('option') as HTMLOptionElement[];

        expect(options.length).toBe(currentOptions.length);
        options.forEach((option, index) => {
            expect(option.value).toBe(currentOptions[index]);
        });
    });
});
