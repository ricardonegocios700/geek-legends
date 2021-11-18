import styled from "styled-components";
import DesktopBack from "../../assets/myGeekStoreBG-desktop.gif";
import MobileBack from "../../assets/myGeekStore-mobile.jpg";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 150px 30px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    background: url(${MobileBack});
    background-size: fill;
    background-position: center center;
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;
    


    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        background: url(${DesktopBack}) no-repeat;
        background-size: cover;        
        background-attachment: fixed;

        padding: 150px 70px 0;
    }
`;
