import styled from "styled-components";

export const MessageSenseiStyle = styled.article`
  background: rgba(79, 127, 248, 0.6);
  margin: 0 auto;
  width: 300px;
  height: 360px;
  text-align: center;
  border-radius: 20px;
  font: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h3 {
    margin: 0px;
    font-size: 25px;
    color: var(--font-color-guia);
    border: 1px solid darkblue;
    border-radius: 20px 20px 0 0;
    height: 40px;
    padding: 5px;
    background: darkblue;
  }
  & > h5 {
    padding: 10px;
    font-size: 20px;
    color: var(--font-color-white);
    text-shadow: -1px -1px 0px red, -1px 1px 0px red, 1px -1px 0px red,
      1px 0px 0px red;
    overflow: auto;
  }
  & > p {
    text-align: right;
    padding: 10px;
    padding-top: 0px;
    color: black;
    text-shadow: -1px -1px 0px blue, -1px 1px 0px blue, 1px -1px 0px blue,
      1px 0px 0px blue;
  }
  @media (min-width: 800px) {
    width: 500px;
    height: 150px;
  }
`;
