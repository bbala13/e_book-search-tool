import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { newSearchInput, searchBarResult } from './searchBarSlice';

const SearchBar = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(newSearchInput(searchInput));
    };

    const [searchInput, setSearchInput] = useState('');
    const debouncedSearch = useDebounce(searchInput, 500);

    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };
    useEffect(() => {
        console.log('request made');
    }, [debouncedSearch]);

    return (
        <form role="search" onSubmit={onSubmitHandler}>
            <label htmlFor="search-bar">
                <span className="visually-hidden">Search</span>
            </label>
            <input
                type="text"
                id="search-bar"
                onChange={onChangeHandler}
                value={searchInput}
            />
            <button type="submit">
                <span className="visually-hidden">Submit Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
