import styled from "styled-components";

export const Container = styled.div`
  border: #000 1px solid;
  border-radius: 15px;
  background-color: var(--red-div);
  width: 90vw;
  /* height: 40vh; */
  max-width: 400px;
  max-height: 410px;
  position: relative;
  bottom: 54px;
  text-align: center;
  top: 30px;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    top: -70px;
    padding: 1.5rem;
  }
`;

export const FormLogin = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  button {
    margin: 13px 0;
    width: 80%;
  }
  a {
    color: #fff;
    font-family: var(--font-family-primary);
    font-size: smaller;
    margin-top: 3px;
  }

  @media only screen and (min-width: 800px) {
    button {
      margin: 22px 0;
      height: 50px;
    }

    a {
      font-size: medium;
    }
  }
`;

export const H1 = styled.h1`
  align-self: flex-start;
  color: #d7b7ff;
  margin-top: 20px;
  margin-bottom: 6px;
  margin-left: 35px;
  font-family: "Comic Neue";
  font-size: 22px;
  font-weight: bold;

  @media only screen and (min-width: 800px) {
    font-size: 26px;
  }
`;

export const ContainerInput = styled.div`
  text-align: center;
`;

export const Input = styled.input`
  background-color: #fff;
  border: none;
  margin: 8px 0;
  width: 80%;
  height: 42px;
  padding: 5px;
  border-radius: 7px;

  @media only screen and (min-width: 800px) {
    margin: 10px 0;
    height: 50px;
  }
`;
