import styled from "styled-components";
import BackImageDesktop from "../../assets/multimidia-desktop.gif";
import BackImageMobile from "../../assets/myMultimediaBG-mobile.png";
// imagem usada em dashboard
// import MyBackImageDesktop from "../../assets/myMultimediaBG-desktop.gif";

// export const Div = styled.div`
//   width: 100vw;
//   height: 100%;
//   min-height: 100vh;
//   @media only screen and (min-width: 400px) {
//   }
//   @media only screen and (min-width: 800px) {
//   }
// `;

export const Container = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 150px 70px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background: url(${BackImageMobile});
  background-size: cover;
  background-position: center center;
  /* background-attachment: fixed;
  background-repeat: space; */

  align-items: center;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    flex-wrap: nowrap;
    background: url(${BackImageDesktop});
    background-size: cover;
  }
`;
