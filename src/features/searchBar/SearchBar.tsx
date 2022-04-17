import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { StyledInput } from './SearchBar.styles';
import { newSearchInput } from './searchBarSlice';

const SearchBar = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(newSearchInput(debouncedValue));
    };

    const [searchInput, setSearchInput] = useState('');
    const debouncedValue = useDebounce(searchInput, 210);

    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <form role="search" onSubmit={onSubmitHandler}>
            <label htmlFor="search-bar">
                <span className="visually-hidden">Search</span>
            </label>
            <StyledInput
                type="text"
                id="search-bar"
                onChange={onChangeHandler}
                value={searchInput}
                name="search bar"
                placeholder="Enter book title..."
            />
            <button type="submit">
                <span className="visually-hidden">Submit Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
