import styled from 'styled-components';

export const FormLayout = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70vh;
    border-radius: 9px;
    margin: 20px;
    width: 60vh;
    padding: 40px 30px;
    background: #ebf5fe;
    border-radius: 40px;
    box-shadow: -6px -6px 20px rgba(255,255,255,1),
                6px 6px 20px rgba(0,0,0,0.1);

    &:hover{
        box-shadow: inset -6px -6px 10px rgba(255,255,255,0.5),
                inset 6px 6px 20px rgba(0,0,0,0.05);
    }
`;

export const FormTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-family: 'Farro', sans-serif;
`;

export const FormInput = styled.input`
    padding: 5px;
    margin: 5px;
    border: none;
    border-bottom: 0.5px solid grey;
    font-size: 1rem;
    font-family: 'Farro', sans-serif;
    width: 90%;
    padding: 15px 30px;
    background: #ebf5fe;
    border-radius: 40px;
    box-shadow: inset -6px -6px 10px rgba(255,255,255,0.5),
                inset 6px 6px 20px rgba(0,0,0,0.05);
`;