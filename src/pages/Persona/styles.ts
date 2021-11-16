import styled from "styled-components";
import backImg from "../../assets/persona-desktop.gif";

export const ContainerPersona = styled.main`
  background-image: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  min-height: 100vh;
  ul {
    width: 90%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 150px;
    li {
    }
  }
  @media (min-width: 800px) {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding-top: 150px;
      padding-bottom: 5px;
    }
  }
`;
