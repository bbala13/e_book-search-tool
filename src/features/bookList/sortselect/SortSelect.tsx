import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentPage } from '../../pagination/paginationSlice';
import { sortBooks, SortChoices } from '../bookListSlice';
import { Container, StyledLabel, StyledSelect } from './SortSelect.styles';

const SortSelect = () => {
    const dispatch = useDispatch();
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedOption = e.target.value;
        if (selectedOption === SortChoices.alphabetically) {
            dispatch(updateCurrentPage(1));
            dispatch(sortBooks(selectedOption));
        } else if (selectedOption === SortChoices.recently_published) {
            dispatch(updateCurrentPage(1));
            dispatch(sortBooks(selectedOption));
        }
    };
    return (
        <Container>
            <StyledLabel htmlFor="sort-books">Sort books:</StyledLabel>
            <StyledSelect
                id="sort-books"
                name="sort-books"
                onChange={onChangeHandler}
            >
                <option value="Select an option">Select an option</option>
                <option value={SortChoices.alphabetically}>
                    Alphabetically
                </option>
                <option value={SortChoices.recently_published}>
                    Recently published
                </option>
            </StyledSelect>
        </Container>
    );
};

export default SortSelect;
