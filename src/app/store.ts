import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookListReducer from '../features/bookList/bookListSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';
import paginationReducer from '../features/pagination/paginationSlice';

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    bookList: bookListReducer,
    pagination: paginationReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
