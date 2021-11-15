import styled from "styled-components";
import itensBox from "./../../assets/treasurechest.gif";

export const ContainerTreasure = styled.div`
  background-image: url(${itensBox});
  background-size: cover;
  width: 240px;
  height: 240px;
  text-align: center;
  color: var(--font-color-white);
  font-size: 30px;
  display: flex;
  flex-direction: column;
  h4 {
    height: 50px;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
    a {
      width: 22%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border: 2px solid transparent;
        border-radius: 50%;
        &:hover {
          border: gray;
        }
      }
    }
  }
  @media (min-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;
