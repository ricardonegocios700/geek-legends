import styled from "styled-components";

export const Container = styled.div`
  background: lightgray;
  width: 300px;
  height: 400px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 20px;
  color: black;
  h3 {
    background: darkblue;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 40px;
    margin-top: 0px;
    padding: 10px auto;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
