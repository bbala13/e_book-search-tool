import searchBarReducer, { newSearchInput } from './searchBarSlice';

describe('searchBar reducer', () => {
    const initialState = '';
    test('should handle initial state', () => {
        expect(searchBarReducer(undefined, { type: 'unknown' })).toEqual('');
    });

    test('should handle new user input', () => {
        const userInput = 'some user input';
        const actual = searchBarReducer(
            initialState,
            newSearchInput(userInput)
        );

        expect(actual).toBe(userInput);
    });
});
