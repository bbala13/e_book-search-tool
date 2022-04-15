import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IDocument {
    title: string;
    first_publish_year: number;
    isbn?: string[];
    author_name: string[]
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
    books: {} as IBook,
    status: '',
    error: '' as string | undefined,
}

//async thunk
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
    reducers: {
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


// export const {  } = bookListSlice.actions;

export default bookListSlice.reducer;
