import paginationReducer, {
    updateCurrentPage,
    updateItemsPerPage,
    updateNumItemsFound,
    updateCurrentActivePage,
} from './paginationSlice';

describe('paginationSlice', () => {
    const initialState = {
        currentPage: 1,
        itemsPerPage: 10,
        numItemsFound: 100,
        currentActivePage: 1,
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

    test('should handle update for current active page', () => {
        const newPage = 4;
        expect(
            paginationReducer(initialState, updateCurrentActivePage(newPage))
        ).toEqual({ ...initialState, currentActivePage: newPage });
    });
});
