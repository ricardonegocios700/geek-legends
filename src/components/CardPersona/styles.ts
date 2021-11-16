import styled from "styled-components";

export const CardPersonaStyle = styled.li`
  background: lightblue;
  width: 200px;
  height: 250px;
  border: 5px solid transparent;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  &:hover {
    border: 5px solid darkblue;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  h4 {
    font-size: 20px;
  }
  p {
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    border: 2px solid transparent;
    border-radius: 20px;
    font-size: 15px;
    background: darkgreen;
    color: white;
    padding: 5px;
    &:hover {
      border: 2px solid darkred;
    }
  }
`;
