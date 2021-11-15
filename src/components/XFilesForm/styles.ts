import styled from "styled-components";
import BackGroundDesktop from "../../assets/myXFileGeekBG-desktop.jpeg";
import BackGroundMobile from "../../assets/myXFileGeek-mobile.jpg";

export const Container = styled.section`
    /* width: 100%;
    height: 100vh;
    padding: 150px 10px 0;     */

    /* background: url(${BackGroundMobile});
    background-size: cover;
    background-position: center center; */

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        /* background: url(${BackGroundDesktop}) no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 150px 70px 0;  */
    }
`;

export const FormContent = styled.div`
    width: 100%;    
    background-color: #f5f5f5;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 5px;
    font-family: var(--font-family-primary);

    & form > div {
        margin: 10px;        
    }

    & form > div > p{
        color: red;
    }

    
`;

export const Label = styled.label`
    font-weight: 700;
    display: block;
    font-size: 18px;

`

export const Input = styled.input`
    width: 100%;
    padding: 5px;
    font-size: 16px;
    color: #868b8e;
    border: 2px solid #868b8e;
    border-radius: 5px;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 80px;
    font-size: 16px;
    color: #868b8e;
    border: 2px solid #868b8e;
    border-radius: 5px; 
    padding: 5px ;
`


export const Button = styled.button`
    border: transparent;
    font-size: 40px;
    height: 40px;
    color: #00f;    
    padding: 0;
    margin: 0 20px;
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & div {
        width: 50%;
    }

    & div > p {
        color: red;
        margin: 5px 0;
    }
`
