import styled from "styled-components";
import BackGroundDesktop from "../../assets/myXFileGeekBG-desktop.jpeg";
import BackGroundMobile from "../../assets/myXFileGeek-mobile.jpg";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 150px 10px 0;  

    background: url(${BackGroundMobile});
    background-position: center center;
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;


    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        background: url(${BackGroundDesktop}) no-repeat;
        background-position: center center;
        background-size: cover;
        background-position: fixed;
        background-attachment: fixed;

        padding: 150px 70px 20px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    margin: 10px 0;
    font-size: 20px;
    color: #fff;
    padding: 5px 25px;
    background-color: var(--blue-button);
    border: transparent;
    border-radius: 6px;
    width: 190px; 
`;
