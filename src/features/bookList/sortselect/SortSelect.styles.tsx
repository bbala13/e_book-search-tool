import styled from 'styled-components';
import { GlobalContainer } from '../../../globalStyles';

export const Container = styled(GlobalContainer)`
    padding: 1.5rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const StyledSelect = styled.select`
    padding: 0.8rem;
    border: 1.8px solid var(--cool-black);
    background-color: var(--light-background);
    appearance: none;
    border-radius: 2px;
    cursor: pointer;

    &:focus {
        outline: solid var(--inverted);
    }

    &:hover,
    &:focus {
        background-color: var(--cool-black);
        color: var(--text-light);
        transition: all 0.2s ease-in;
    }
`;

export const StyledLabel = styled.label`
    margin-right: 5px;
`;
