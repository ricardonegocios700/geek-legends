import styled from "styled-components";
import BackImage from "../../assets/multimidia-desktop.gif";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
  }
`;

export const Container = styled.section`
  padding: 150px 70px 0;
  color: #fff;
  background-color: var(--back-color);
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    background: url(${BackImage}) no-repeat;
    background-size: cover;
    background-position: center;
    align-items: center;
    height: 100vh;
    max-width: 100vw;
    width: 100%;
  }
`;
