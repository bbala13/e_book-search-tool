import paginationReducer, {
    updateCurrentPage,
    updateItemsPerPage,
    updateNumItemsFound,
} from './paginationSlice';

describe('paginationSlice', () => {
    const initialState = {
        currentPage: 1,
        itemsPerPage: 10,
        numItemsFound: 100,
    };
    test('should handle initial state', () => {
        expect(paginationReducer(undefined, { type: 'unknown' })).toEqual(
            initialState
        );
    });

    test('should handle update for current page', () => {
        const newPage = 3;
        expect(
            paginationReducer(initialState, updateCurrentPage(newPage))
        ).toEqual({
            ...initialState,
            currentPage: newPage,
        });
    });

    test('should handle update for itemsPerpage', () => {
        const newItemsPerpage = 20;
        expect(
            paginationReducer(initialState, updateItemsPerPage(newItemsPerpage))
        ).toEqual({ ...initialState, itemsPerPage: newItemsPerpage });
    });

    test('should handle update for number of items found', () => {
        const newNumItemsFound = 110;
        expect(
            paginationReducer(
                initialState,
                updateNumItemsFound(newNumItemsFound)
            )
        ).toEqual({ ...initialState, numItemsFound: newNumItemsFound });
    });
});
