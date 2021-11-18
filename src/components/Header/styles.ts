import styled from "styled-components";
import Avatar from "../../assets/avatar.png";

export const Container = styled.header`
  width: 100%;
  height: 130px;
  padding: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 2;

  background-color: var(--header-background-color);

  box-shadow: 0px 9px 30px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 9px 30px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 9px 30px -4px rgba(0, 0, 0, 1);

  & ul {
    display: flex;
    justify-content: center;
  }

  & ul > li {
    font-size: 35px;
    margin: 5px;
  }

  .select,
  .pageLocation {
    display: none;
  }

  @media only screen and (min-width: 400px) {
  }

  @media only screen and (min-width: 800px) {
    .select {
      font-family: var(--font-family-secundary);
      display: block;
      width: 200px;
      border-radius: 4px;
    }

    & ul > li {
    font-size: 50px;
    margin: 10px;
  }

    .pageLocation {
      font-family: var(--font-family-primary);
      width: 250px;
      display: block;
    }
  }
`;

export const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${Avatar});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Logout = styled.div`
  font-size: 35px;
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    font-size: 50px;
  }
`;