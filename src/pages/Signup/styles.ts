import styled from "styled-components";
import SignupBG from "../../assets/signupBG-desktop.jpg";

export const Container = styled.div`
    background-color: #231f20;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: relative;

    @media only screen and (min-width: 400px) {
    }

    @media only screen and (min-width: 800px) {
        background: url(${SignupBG}) no-repeat;
        background-size: cover;
        background-position: center center;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
`;

export const Div1 = styled.div`
    position: static;
    & > div > p {
        display: none;
    }

    @media only screen and (min-width: 800px) {
        
        display: flex;
        align-self: flex-end;
        margin: 100px 0;

        & > div > p {
            color: #fff;
            text-align: center;
            display: block;
            font-size: 20px;
            font-weight: bold;
            font-family: "Comic Neue";
            margin: 0;
        }
    }
`;

export const Div = styled.div`
    position: static;

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-family: Comic Neue;
    font-size: 38px;
    margin: 0;

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        font-size: 50px;
    }
`;
