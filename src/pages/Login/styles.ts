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
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-family: Comic Neue;
  font-size: 14vw;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    bottom: 170px;
    font-size: 60px;
    padding-top: 40px;
  }
`;

export const Text = styled.section`
  position: relative;
  bottom: 150px;
  color: #fff;
  font-size: large;

  @media only screen and (min-width: 800px) {
    font-family: var(--font-family-primary);

    p {
      padding: 15px;
      font-size: larger;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
  }
`;

export const ContainerText = styled.div`
  justify-self: start;
  position: absolute;
  top: 0;
  margin: 7vh auto;

  @media only screen and (min-width: 800px) {
    justify-self: center;
    position: inherit;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-self: normal;
    margin-left: 0;
  }
`;

export const DivText = styled.div`
  display: none;
  @media only screen and (min-width: 400px) {
    display: none;
  }
  @media only screen and (min-width: 800px) {
    display: inline;
    width: 550px;
  }
`;
