import styled from "styled-components";
interface ColorsProps {
  backgroundColor: string;
}
export const ActionButton = styled.button<ColorsProps>`
  width: 200px;
  padding: 10px 30px;
  border: transparent;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;
  box-shadow: 0 0 15px 0px #868b8e;
  display: block;

  :hover {
    filter: brightness(0.9);
  }
`;
