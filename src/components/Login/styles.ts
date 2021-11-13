import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 20px 0;
  }
`;

export const Context = styled.div`
  border: #000 1px solid;
  border-radius: 8px;
  background-color: #672828;
  width: 280px;
  height: 280px;
  position: relative;
  bottom: 54px;
  text-align: center;
`;

export const H1 = styled.h1`
  /* text-align: left; */
  align-items: left;
  /* justify-content: left; */
`;

export const CentextInput = styled.div`
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
