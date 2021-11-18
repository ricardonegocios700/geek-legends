import styled from "styled-components";

export const CardPersonaStyle = styled.li`
  background: rgba(140, 160, 57, 0.9);
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
    background: darkgray;
  }
  img {
    width: 80px;
    height: 80px;
    margin: 5px auto;
    border-radius: 50%;
    border: 1px solid darkblue;
    box-shadow: 1px 1px 11px 1px #ff8080, -5px 1px 11px 1px #ffe488,
      -3px -1px 11px 1px #8cff85, 8px -1px 11px 1px #80c7ff,
      8px 6px 11px 3px #e488ff, -6px 6px 11px 3px #ff616b,
      -6px -3px 23px -3px #8e5cff, 1px 1px 11px 1px rgba(0, 0, 0, 0);
  }
  h4 {
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    width: 90%;
    overflow: auto;
    height: 70px;
    text-align: center;
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
      background: midnightblue;
      color: aqua;
    }
  }
`;
