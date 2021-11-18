import styled from "styled-components";

export const Container2 = styled.div`
  width: 170px;
  height: 100vh;
  min-height: 300px;
  max-height: 300px;
  border: 0.25px solid #000;
  //border-radius: 6px;
  padding: 40px 30px;
  margin: 0px auto;
  background-color: #f5f5f5;

  & h1 {
    text-align: center;
    font-size: medium;
    color: #000;
  }

  & p {
    text-align: center;
  }

  & .emojis {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & .addCard {
      width: 50px;
      height: 50px;
      color: var(--blue-button);
    }
  }
`;

export const ImageDiv = styled.div`
  width: 90%;
  height: 50%;
  border: 4px solid gold;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #f5f5f5;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: scale-down;
  }
`;

export const Like = styled.div`
  color: var(--red-button);
  cursor: pointer;
  border-radius: 60%;
  width: 40px;
  height: 40px;

  & .smile {
    width: 40px;
    height: 40px;
  }

  & p {
    font-family: var(--font-family-primary);
    font-weight: bold;
    font-size: 18px;
  }

  @media only screen and (min-width: 800px) {
    :hover {
      box-shadow: 0px 0px 20px 1px var(--red-button);
      transform: scale(1.05);
    }
  }
`;

export const Dislike = styled(Like)`
  & .sad {
    width: 40px;
    height: 40px;
  }
`;

export const Info = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 56px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
