import styled from "styled-components";


export const Container = styled.div`
    width: 280px;    
    background-color: #40488B;    
    border-radius: 20px;
    margin: 0 auto;
    padding: 20px;
    
    & > h1 {
        font-family: 'Comic Neue';
        font-size: 35px;
        font-weight: bold;
        color: #fff;
        margin: 0;
        padding: 10px;
    }

    & > div {
        text-align: center;
        margin: 5px 0;
        color: #fff;
    }
`;

export const FormContainer = styled.form`    
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    & > input, textarea {
        margin: 5px 0;
        border-radius: 10px;
        font-size: 16px;
        font-family: Comic Neue;
        padding: 5px;
    }

    & > input {        
        height: 30px;       
    }

    & > textarea {
        height: 50px;
    }

`;

