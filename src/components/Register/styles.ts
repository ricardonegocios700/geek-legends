import styled from "styled-components";

export const Container = styled.div`
    width: 280px;
    background-color: #40488b;
    border-radius: 20px;
    margin: 0 auto;
    padding: 20px;

    & > h1 {
        font-family: "Comic Neue";
        font-size: 35px;
        font-weight: bold;
        color: #fff;       
        padding: 10px;
    }

    @media only screen and (min-width: 400px) {
        width: 350px;
    }
    @media only screen and (min-width: 800px) {
        width: 350px;
        background-color: rgba(17, 23, 80, 0.8);
        border-radius: 5px;
    }
`;

export const FormContainer = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;

    & > input,
    textarea {
        margin: 5px 0;
        border-radius: 10px;
        font-size: 16px;
        font-family: Comic Neue;
        padding: 10px;
    }

    & p.errorMsg {
        font-size: 14px;
        color: #E23E3E;
        font-weight: 700;
        margin: 5px;        
    }

    & > div > input {
            height: 50px;
        }

    & > textarea {
        height: 70px;
    }

    & > div {
        text-align: center;
        font-size: 14px;
        color: #fff;
        margin: 5px 0;
    }
`;

export const ButtonContainer = styled.div`  

    & Button {
        width: 100%;
    }
`;