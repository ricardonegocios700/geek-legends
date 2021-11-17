import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  h3 {
    background: darkblue;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 40px;
    font-size: 30px;
    margin-top: 0px;
    padding: 10px auto;
    color: var(--font-color-guia);
    font-variant: small-caps;
  }
  h5 {
    color: var(--font-color-black);
    width: 80%;
    font-size: 30px;
    font-variant: small-caps;
  }
  h6 {
    color: var(--font-color-black);
    width: 80%;
    font-size: 18px;
    font-variant: small-caps;
  }
  p {
    color: var(--font-color-black);
    width: 80%;
    overflow: scroll;
    height: 50px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  button {
    width: 200px;
    height: 20px;
    font-size: 15px;
    margin-bottom: 15px;
    background: transparent;
    border: 2px solid transparent;
    font-variant: small-caps;
    font-weight: bold;
    border-radius: 20px;
    :hover {
      background: var(--font-color-guia);
    }
  }
`;
