import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  background-color: #40488b;
  border-radius: 20px;
  margin: 0 auto;
  padding: 20px;

  & > h1 {
    font-family: "Comic Neue";
    font-size: 26px;
    font-weight: bold;
    color: #cefffc;
    padding: 0px 8px;
  }

  @media only screen and (min-width: 400px) {
    width: 300px;
  }
  @media only screen and (min-width: 800px) {
    width: 350px;
    height: 70vh;
    background-color: rgba(17, 23, 80, 0.8);
    border-radius: 5px;
  }
`;

export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > input,
  textarea {
    margin: 5px 0;
    border-radius: 6px;
    font-size: 16px;
    font-family: Comic Neue;
    padding: 10px;
    border: none;
  }

  & p.errorMsg {
    font-size: 14px;
    color: #e23e3e;
    font-weight: 700;
    margin: 5px;
  }

  & > div > input {
    height: 50px;
  }

  & > textarea {
    height: 75px;
  }

  & > div {
    text-align: center;
    font-size: 14px;
    font-family: var(--font-family-secundary);
    color: #fff;
    margin: 8px 0;
  }

  @media only screen and (min-width: 800px) {
    & > div {
      margin: 12px 0;
    }

    & > input,
    textarea {
      margin: 6px;
      padding: 12px;
    }
  }
`;

export const ButtonContainer = styled.div`
  & Button {
    width: 100%;
  }
`;
