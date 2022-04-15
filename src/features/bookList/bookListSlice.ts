import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Document {
    title: string;
    first_publish_year: number;
    isbn: [];
    author_name: []
}

interface Book {
    numFound: number;
    start: number;
    numFoundExact: boolean;
    docs: Document[];
    num_found: number;
    q: string;
    offset: unknown
}

const initialState = {
    books: {} as Book,
    status: '',
    error: false
}

const BASE_URL = 'http://openlibrary.org/'
const SEARCH_PATH = 'search.json?q='
const FIELDS = '&fields=title,first_publish_year,isbn,author_name'

//dispatches pending action
export const searchBooks = createAsyncThunk('bookList/getBooks', async (searchQuery: string) => {
    return fetch(`${BASE_URL + SEARCH_PATH + searchQuery + FIELDS}`).then(res => res.json())
}
)

const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(searchBooks.pending, (state) => {
            state.status = 'loading'
            state.error = false
        })
            .addCase(searchBooks.fulfilled, (state, action) => {
                state.status = 'success'
                state.books = action.payload
                state.error = false
            }).addCase(searchBooks.rejected, (state) => {
                state.status = 'error'
                state.error = true
            })
    }
})

export const getAllBooks = (state: RootState) => state.bookList.books

// export const {  } = bookListSlice.actions;

export default bookListSlice.reducer;
