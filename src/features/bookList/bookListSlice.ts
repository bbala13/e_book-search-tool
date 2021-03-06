import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import dummyBookListData from '../../fixtures/dummyData/searchResults.json';



export interface IDocument {
    title: string;
    first_publish_year: number;
    author_name: string[];
    cover_i?: string;
}

export interface IBook {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: IDocument[];
    num_found: number;
    q: string;
    offset: unknown
}

const { numFound, numFoundExact, num_found, offset, q, start } = dummyBookListData;

//const dummyDocs = docs as IDocument[];

export const initialState = {
    books: { docs: [], numFound, numFoundExact, start, q, offset, num_found } as IBook,
    status: 'initial',
    error: '' as string | undefined,
    sorted: '',

}

//async thunk
const BASE_URL = 'https://openlibrary.org/'
const SEARCH_PATH = 'search.json?title='
const FIELDS = '&fields=title,first_publish_year,cover_i,author_name'

//dispatches pending action
export const searchBooks = createAsyncThunk('bookList/getBooks', async (searchQuery: string) => {
    return fetch(`${BASE_URL + SEARCH_PATH + searchQuery + FIELDS}`).then(res => res.json())
}
)

export const SortChoices = {
    alphabetically: 'Alphabetically',
    recently_published: 'Recently Published'
} as const;

const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        sortBooks: (state, action: PayloadAction<string>) => {
            if (action.payload === SortChoices.alphabetically) {
                state.sorted = SortChoices.alphabetically
            }
            if (action.payload === SortChoices.recently_published) {
                state.sorted = SortChoices.recently_published
            }
        }

    },
    extraReducers(builder) {
        builder.addCase(searchBooks.pending, (state) => {
            state.status = 'loading'

        })
            .addCase(searchBooks.fulfilled, (state, action) => {
                state.status = 'success'
                state.books = action.payload

            }).addCase(searchBooks.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })
    }
})

//methods
export const getAllBooks = (state: RootState) => state.bookList.books
export const getSortedStatus = (state: RootState) => state.bookList.sorted
export const getFetchStatus = (state: RootState) => state.bookList.status


export const { sortBooks } = bookListSlice.actions;

export default bookListSlice.reducer;
