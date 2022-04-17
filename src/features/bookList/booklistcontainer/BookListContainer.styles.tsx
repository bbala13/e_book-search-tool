import styled from 'styled-components';
import { GlobalContainer } from '../../../globalStyles';

export const StyledDiv = styled.div`
    //border: 1px solid green;
    margin-top: 2rem;
    background-color: var(--background-light);
    position: relative;
    padding: 0 1.5rem;
`;

export const StyledImg = styled.img`
    display: block;
    margin-inline: auto;
    height: 300px;
`;

export const FlexContainer = styled(GlobalContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`;
