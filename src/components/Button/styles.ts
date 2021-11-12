import styled from "styled-components";

export const ActionButton = styled.button`
  width: 200px;
  padding: 10px 30px;
  border: transparent;
  border-radius: 5px;
  background-color: var(--red-button);
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;
  box-shadow: 0 0 15px 0px var(--red-button-shadow);
  display: block;

  :hover {
    filter: brightness(0.9);
  }
`;
