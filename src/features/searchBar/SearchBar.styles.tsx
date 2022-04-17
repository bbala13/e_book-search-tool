import styled from 'styled-components';

export const StyledInput = styled.input`
    border-radius: 2px;
    vertical-align: bottom;
    border: none;
    appearance: none;
    width: 300px;
    padding: 0.8rem;

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

export const StyledImg = styled.img`
    height: 20px;
    display: block;
    margin: auto;
`;

export const StyledBtn = styled.button`
    background-color: white;
    align-self: stretch;
    border: none;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translate(-100%, -50%);
    border-radius: 2px;
    cursor: pointer;
    &:focus {
        outline: solid var(--inverted);
    }

    @media screen and (max-width: 900px) {
        height: 49px;
    }
`;

export const StyledForm = styled.form`
    position: relative;
    width: max-content;
    margin-inline: auto;
`;
