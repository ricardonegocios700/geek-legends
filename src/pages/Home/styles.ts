import homeBGdesktop from "../../assets/homeBG-desktop.png";
import homeBGmobile from "../../assets/homeBG-mobile.jpg";
import styled from "styled-components";

export const HomeContainer = styled.main`
  background-image: url(${homeBGmobile});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--font-color-white);
  font-family: var(--font-family-primary);

  @media (min-width: 768px) {
  }

  @media (min-width: 1000px) {
    background-image: url(${homeBGdesktop});
    background-position: center;
    background-size: cover;
  }
`;

export const TitleSection = styled.section`
  position: absolute;
  bottom: 0;
  font-size: 2rem;
  width: 100%;
  text-align: center;
  margin: 20px;

  img {
    display: none;
  }

  div {
    display: flex;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: max-content;
    top: 0;
    left: 0;
    margin: 40px;

    h1 {
      margin: 10px;
    }
    img {
      display: flex;
      width: 120px;
      border-radius: 50%;
    }
  }

  @media (min-width: 700px) {
    div {
      justify-content: space-between;
    }
  }

  @media (min-width: 1000px) {
    margin: 100px;
    width: 480px;

    h1 {
      font-size: 3.5rem;
    }

    img {
      width: 160px;
    }
  }
`;

export const ButtonsDiv = styled.div`
  position: absolute;
  top: 20vh;
  display: flex;
  flex-direction: column;
  z-index: 1;

  button {
    margin: 15px;
  }

  @media (min-width: 546px) {
    top: 30vh;
  }

  @media (min-width: 768px) {
    top: 50%;
  }

  @media (min-width: 1000px) {
    left: 10%;
    top: 65%;

    height: max-content;

    button {
      width: 300px;
      margin: 25px;
    }
  }
`;

export const TeamSection = styled.section`
  background-color: var(--blue-div);
  display: flex;
  flex-direction: column;
  width: 75vw;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 90px;
  border-radius: 0 50px 0 50px;
  padding: 10px;

  .containerDevs {
    max-height: 300px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    padding: 15px;
  }

  .containerDevs > div {
    margin: 3px;
  }

  .containerDevs > div > img {
    width: 60px;
  }

  @media (min-width: 768px) {
    width: 450px;
    bottom: 0;
    right: 0;

    .containerDevs > div > img {
      width: 70px;
    }
  }

  @media (min-width: 1000px) {
    /* position: relative; */
    width: 40vw;
    justify-content: space-between;

    .containerDevs {
      align-self: stretch;
    }

    .containerDevs > div > img {
      width: 80px;
    }
  }
`;
