import styled from "styled-components";

export const H1 = styled.h1`
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
  max-width: 209px;
  height: 40px;
  background-color: #0d3b4f;
  color: #76f7ff;
  text-align: center;
  font-size: 30px;
`;

export const Div = styled.div`
  max-width: 209px;
  max-height: 593px;
  border: 1px #fff solid;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
  }
`;

export const Container = styled.section`
  width: 90vw;

  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
  }
`;
