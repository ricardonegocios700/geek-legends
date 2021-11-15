import styled from "styled-components";
import BackGroundDesktop from "../../assets/myXFileGeekBG-desktop.jpeg";
import BackGroundMobile from "../../assets/myXFileGeek-mobile.jpg";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 150px 10px 0;    

    background: url(${BackGroundMobile});
    background-size: cover;
    background-position: center center;

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        background: url(${BackGroundDesktop}) no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 150px 70px 0; 
    }
`;