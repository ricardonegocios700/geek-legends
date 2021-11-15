import styled from "styled-components";
import BackImage from "../../assets/multimidia-desktop.gif";

export const Div = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
  }
`;

export const Container = styled.section`
  color: #fff;
  background-color: var(--back-color);
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    background: url(${BackImage}) no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
`;
