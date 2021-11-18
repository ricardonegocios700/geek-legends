import styled from "styled-components";
import BackImageDesktop from "../../assets/multimidia-desktop.gif";
import BackImageMobile from "../../assets/myMultimediaBG-mobile.png";

export const Container = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 150px 70px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: url(${BackImageMobile}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: fixed;

  align-items: justify;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    flex-wrap: nowrap;
    align-content: flex-start;

    background: url(${BackImageDesktop}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: fixed;
  }
`;
