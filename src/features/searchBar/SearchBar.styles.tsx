import styled from 'styled-components';

export const StyledInput = styled.input`
    border-radius: 2px;
    vertical-align: bottom;
    border: none;
    appearance: none;
    width: 300px;
    padding: 0.8rem;
    margin-top: 1rem;
    height: 41px;
    font-size: 1rem;

    &::-moz-placeholder {
        color: var(--text-dark);
        transition: color 0.2s ease-in;
    }
    &::placeholder {
        color: var(--text-dark);
        transition: color 0.2s ease-in;
    }

    &:focus::placeholder {
        color: transparent;
    }

    &:focus {
        outline: solid var(--inverted);
        width: 310px;
        height: 45px;
        transition-property: width, height;
        transition: 0.2s ease;
    }

    @media screen and (max-width: 900px) {
        height: 50px;
        width: 350px;

        &:focus {
            width: 360px;
            height: 55px;
        }
    }
`;
