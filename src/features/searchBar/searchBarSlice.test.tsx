import searchBarReducer, { newSearchInput } from './searchBarSlice';

describe('searchBarSlice', () => {
    const initialState = '';
    test('should handle initial state', () => {
        expect(searchBarReducer(undefined, { type: 'unknown' })).toEqual('');
    });

    test('should handle new user input', () => {
        const userInput = 'some user input';
        const newState = searchBarReducer(
            initialState,
            newSearchInput(userInput)
        );

        expect(newState).toBe(userInput);
    });
});
