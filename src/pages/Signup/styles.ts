import styled from "styled-components";
import SignupBG from "../../assets/signupBG-desktop.jpg";

export const Container = styled.div`    
    background-color: #231F20;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    height: 100vh;

    @media only screen and (min-width: 400px){}


    @media only screen and (min-width: 800px){
        background: url(${SignupBG}) no-repeat center;
        background-size: 100%;
    }
`;

export const Div = styled.div`    
    
    
`;

export const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-family: Comic Neue;
    font-size: 38px;
`;