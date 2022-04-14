import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const SearchBar = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const [searchInput, setSearchInput] = useState('');
    const debouncedSearch = useDebounce(searchInput, 500);

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
