import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


const initialState = ''

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {

        newSearchInput(state, action: PayloadAction<string>) {
            return state = action.payload
        }

    }
})

export const searchBarResult = (state: RootState) => state.searchBar

export const { newSearchInput } = searchBarSlice.actions;

export default searchBarSlice.reducer;


//keep track of previous search results; by changing to array