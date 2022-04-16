import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import { StyledInput } from './SearchBar.styles';
import { newSearchInput } from './searchBarSlice';

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
            <label htmlFor="search-bar"></label>
            <StyledInput
                type="text"
                id="search-bar"
                onChange={onChangeHandler}
                value={searchInput}
                name="search bar"
                placeholder="Enter book title..."
            />
            <button type="submit" title="Submit search"></button>
        </form>
    );
};

export default SearchBar;
