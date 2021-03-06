import styled from 'styled-components';
import { GlobalContainer } from '../../globalStyles';

export const Container = styled(GlobalContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;
`;

export const StyledUL = styled.ul`
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;

    @media screen and (max-width: 900px) {
        gap: 8px;
    }
`;

interface StyledButtonProps {
    active: boolean;
}
export const StyledButton = styled.button<StyledButtonProps>`
    background: none;
    appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    border: none;
    cursor: pointer;

    background-color: ${({ active }) =>
        active ? 'var(--inverted)' : 'var(--cool-black)'};
    color: ${({ active }) =>
        active ? 'var(--text-dark)' : 'var(--text-light)'};
    height: 35px;
    border-radius: 2px;
    padding: 0 10px;

    &:focus,
    &:hover {
        outline: solid var(--inverted);
    }

    @media screen and (max-width: 900px) {
        height: 40px;
        width: 35px;
    }
`;
