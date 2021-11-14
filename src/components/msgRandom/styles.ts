import styled from "styled-components";

export const MessageSenseiStyle = styled.article`
  background: darkblue;
  margin: 0 auto;
  width: 300px;
  height: 360px;
  text-align: center;
  & > h3 {
    margin: 0px;
  }
  & > p {
  }
  @media (min-width: 800px) {
    width: 500px;
    height: 150px;
  }
`;
