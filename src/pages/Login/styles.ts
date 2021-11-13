import styled from "styled-components";
import LoginBG from "../../assets/loginBG-desktop.gif";

export const Container = styled.section`
  background-color: var(--back-color);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h1 {
    text-align: left;
  }
  @media only screen and (min-width: 400px) {
    background: url(${LoginBG}) no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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
  position: relative;
  bottom: 160px;
  width: 432px;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    font-size: 50px;
  }
`;

export const Text = styled.section`
  position: relative;
  bottom: 110px;
  color: #fff;
  font-size: large;
  width: 532px;
`;
