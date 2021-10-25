import styled from 'styled-components';

export const CardLayout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: #e2e2e2;
    border-radius: 9px;
    min-height: 45vh;
    min-width: 40vh;
    padding: 20px;
    margin: 20px;

    &:hover {
        cursor: pointer;
        min-height: 46vh;
        min-width: 41vh;
        transition: 0.3s;
    }
`;