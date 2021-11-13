import styled from "styled-components";

export const Container = styled.div`
  border: #000 1px solid;
  border-radius: 8px;
  background-color: #672828;
  width: 280px;
  height: 280px;
  position: relative;
  bottom: 54px;
  text-align: center;
  top: 30px;

  @media only screen and (min-width: 400px) {
    width: 350px;
  }
  @media only screen and (min-width: 800px) {
    width: 350px;
    border-radius: 5px;
    top: -70px;
  }
`;

export const FormLogin = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 13px 0;
  }
  a {
    color: #fff;
    font-size: small;
    margin-top: 3px;
  }
`;

export const H1 = styled.h1`
  text-align: left;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 6px;
  font-family: "Comic Neue";
  font-size: 35px;
  font-weight: bold;
`;

export const ContainerInput = styled.div`
  text-align: center;
`;

export const Input = styled.input`
  width: 50%;
  background-color: #fff;
  border: none;
  margin: 10px 0;
  width: 200px;
  height: 30px;
  border-radius: 6px;
`;
