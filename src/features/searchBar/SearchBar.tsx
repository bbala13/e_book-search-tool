import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounce';
import {
    StyledImg,
    StyledInput,
    StyledBtn,
    StyledForm,
} from './SearchBar.styles';
import { newSearchInput } from './searchBarSlice';
import searchSVG from '../../assets/imgs/search.svg';

const SearchBar = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(newSearchInput(debouncedValue));
    };

    const [searchInput, setSearchInput] = useState('');
    const debouncedValue = useDebounce(searchInput, 200);

    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <StyledForm role="search" onSubmit={onSubmitHandler}>
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
            <StyledBtn type="submit">
                <span className="visually-hidden">Submit Search</span>
                <StyledImg src={searchSVG} alt="magnifying glass" role="img" />
            </StyledBtn>
        </StyledForm>
    );
};

export default SearchBar;
