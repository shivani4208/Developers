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

export const LoginDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ebf5fe;
    border-radius: 9px;
    min-height: 45vh;
    min-width: 40vh;
    padding: 20px;
    margin: 30px;
    box-shadow: -6px -6px 20px rgba(255,255,255,1),
                6px 6px 20px rgba(0,0,0,0.1);

    &:hover {
        cursor: pointer;
        min-height: 46vh;
        min-width: 41vh;
        transition: 0.3s;
        box-shadow: inset -6px -6px 10px rgba(255,255,255,0.5),
                inset 6px 6px 20px rgba(0,0,0,0.05);
    }
`;