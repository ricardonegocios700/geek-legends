import styled from "styled-components";
import backCity from "../../assets/dashboardBG-desktop.gif";

export const ContainerDash = styled.main`
  height: 95vh;
  background-image: url(${backCity});
  background-size: cover;
  background-repeat: no-repeat;
  header {
    background: lightblue;
    width: 100vw;
    height: 15vh;
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
