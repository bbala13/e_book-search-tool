import React from 'react';

const SearchBar = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form role="search" onSubmit={onSubmitHandler}>
            <label htmlFor="search-bar">
                <span className="visually-hidden">Search</span>
            </label>
            <input type="text" id="search-bar" />
            <button type="submit">
                <span className="visually-hidden">Submit Search</span>
            </button>
        </form>
    );
};

export default SearchBar;
