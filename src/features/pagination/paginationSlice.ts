import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


const initialState = {
    currentPage: 1,
    itemsPerPage: 10,
    numItemsFound: 100,
    currentActivePage: 1,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        updateItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload
        },
        updateCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        updateNumItemsFound: (state, action: PayloadAction<number>) => {
            state.numItemsFound = action.payload
        },
        updateCurrentActivePage: (state, action: PayloadAction<number>) => {
            state.currentActivePage = action.payload
        }


    }
})

export const getNumItemsFound = (state: RootState) => state.pagination.numItemsFound;
export const getCurrentPage = (state: RootState) => state.pagination.currentPage;
export const getItemsPerPage = (state: RootState) => state.pagination.itemsPerPage;
export const getCurrentActivePage = (state: RootState) => state.pagination.currentActivePage;

export const { updateItemsPerPage, updateCurrentPage, updateNumItemsFound, updateCurrentActivePage } = paginationSlice.actions;

export default paginationSlice.reducer;
