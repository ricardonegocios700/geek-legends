import styled from "styled-components";
import backCity from "../../assets/dashboardBG-desktop.gif";

export const ContainerDash = styled.main`
  height: 100vh;
  background-image: url(${backCity});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  header {
    background: lightblue;
    width: 100vw;
    height: 18vh;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 20px 100px;
    color: var(--font-color-white);
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
    }
  }
`;

export const Space = styled.p`
  width: 100vw;
  height: 18vh;
`;
