import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookListReducer from '../features/bookList/bookListSlice';
import counterReducer from '../features/counter/counterSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchBar: searchBarReducer,
    bookList: bookListReducer

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
