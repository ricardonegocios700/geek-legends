import styled from "styled-components";
import LoginBG from "../../assets/loginBG-desktop.gif";

export const Container = styled.section`
  background-color: var(--back-color);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: left;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    background: url(${LoginBG}) no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-family: Comic Neue;
  font-size: 38px;
  margin: 0;
  position: relative;
  bottom: 0px;
  width: 432px;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    bottom: 170px;
    font-size: 50px;
  }
`;

export const Text = styled.section`
  position: relative;
  bottom: 110px;
  color: #fff;
  font-size: large;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivText = styled.div`
  display: none;
  @media only screen and (min-width: 400px) {
    display: none;
  }
  @media only screen and (min-width: 800px) {
    display: inline;
    position: relative;
    botton: 320px;
    left: 70px;
  }
`;
