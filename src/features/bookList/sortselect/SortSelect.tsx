import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBooks } from '../bookListSlice';

const SortSelect = () => {
    const dispatch = useDispatch();
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedOption = e.target.value;
        if (selectedOption === 'Alphabetically') {
            dispatch(sortBooks(selectedOption));
        } else if (selectedOption === 'Recently Published') {
            dispatch(sortBooks(selectedOption));
        }
    };
    return (
        <>
            <label htmlFor="sort-books">Sort books:</label>
            <select
                id="sort-books"
                name="sort-books"
                onChange={onChangeHandler}
            >
                <option value="">Select an option</option>
                <option value="Alphabetically">Alphabetically</option>
                <option value="Recently Published">Recently published</option>
            </select>
        </>
    );
};

export default SortSelect;
