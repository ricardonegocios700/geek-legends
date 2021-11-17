import styled from "styled-components";
import BackImage from "../../assets/multimidia-desktop.gif";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    flex-wrap: nowrap;
  }
`;

export const Container = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  padding: 150px 70px 0;
  display: flex;
  flex-direction: column;

  background: url(${BackImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: space;

  align-items: center;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
  }
`;
