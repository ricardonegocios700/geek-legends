import styled from "styled-components";
import backCity from "../../assets/dashboardBG-desktop.gif";

export const ContainerDash = styled.main`
  background-image: url(${backCity});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  header {
    background: lightblue;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    a {
      width: 110px;
      div {
        width: 100px;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px auto;
    width: 85%;
    color: var(--font-color-white);
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      article {
        width: 80%;
      }
      div {
        width: 240px;
        height: 240px;
      }
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    header {
      background: lightblue;
      width: 100%;
      display: flex;
      justify-content: space-around;
      & > a {
        width: 110px;
        div {
          margin-top: 26 px;
          width: 70px;
          height: 80px;
        }
      }
      .select {
        display: none;
      }
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 70%;
      color: var(--font-color-white);
      div {
        display: flex;
        width: 300px;
        height: 100%;
        flex-direction: column;
        margin: 0;
      }
      section {
        display: flex;
        width: 60%;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        article {
          width: 90%;
          margin: 0;
        }
        div {
          width: 220px;
          height: 210px;
          h4 {
            font-size: 30px;
            margin-top: 20px;
          }
        }
      }
    }
  }
`;

export const Space = styled.p`
  width: 100vw;
  height: 80px;
  @media (min-width: 800px) {
    height: 100px;
  }
`;

export const Logout = styled.span`
  font-size: 35px;
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 5px;
  z-index: 2;
  @media (min-width: 800px) {
    font-size: 40px;
  }
`;
