import bookListReducer, {
    sortBooks,
    initialState,
    SortChoices,
} from './bookListSlice';

describe('bookListSlice', () => {
    test('should handle initial state', () => {
        expect(bookListReducer(undefined, { type: 'unknown' })).toEqual(
            initialState
        );
    });

    test('should handle sorting options', () => {
        expect(
            bookListReducer(initialState, sortBooks(SortChoices.alphabetically))
        ).toStrictEqual({
            ...initialState,
            sorted: SortChoices.alphabetically,
        });

        expect(
            bookListReducer(
                initialState,
                sortBooks(SortChoices.recently_published)
            )
        ).toStrictEqual({
            ...initialState,
            sorted: SortChoices.recently_published,
        });
    });
});
