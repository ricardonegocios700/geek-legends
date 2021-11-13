import styled from "styled-components";
import DesktopBack from "../../assets/myGeekStoreBG-desktop.gif";
import MobileBack from "../../assets/myGeekStore-mobile.jpg";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    background: url(${MobileBack});
    background-size: cover;
    background-position: center center;

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        background: url(${DesktopBack}) no-repeat;
        background-size: cover;
        background-position: center center;
    }
`;
