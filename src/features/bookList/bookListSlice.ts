import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

const initialState = {
    books: { docs: [{ title: 'title', author_name: ['dasd'], first_publish_year: 1000, cover_i: 'htp' }], numFound: 0, numFoundExact: true, start: 0, q: 'the great gatsby', offset: [], num_found: 0 } as IBook,
    status: '',
    error: '' as string | undefined,
    sorted: ''
}

//async thunk
const BASE_URL = 'http://openlibrary.org/'
const SEARCH_PATH = 'search.json?q='
const FIELDS = '&fields=title,first_publish_year,cover_i,author_name'

//dispatches pending action
export const searchBooks = createAsyncThunk('bookList/getBooks', async (searchQuery: string) => {
    return fetch(`${BASE_URL + SEARCH_PATH + searchQuery + FIELDS}`).then(res => res.json())
}
)

const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        sortBooks: (state, action: PayloadAction<string>) => {
            if (action.payload === 'Alphabetically') {
                state.sorted = 'Alphabetically'
            }
            if (action.payload === 'Recently Published') {
                state.sorted = 'Recently Published'
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

export const { sortBooks } = bookListSlice.actions;

export default bookListSlice.reducer;
