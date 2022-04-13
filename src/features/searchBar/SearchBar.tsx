import React from 'react';

const SearchBar = () => {
    return (
        <form role="search">
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
