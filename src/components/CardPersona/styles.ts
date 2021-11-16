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
    border: darkblue;
  }
`;
