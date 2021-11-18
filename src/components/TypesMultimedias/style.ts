import styled from "styled-components";
// export const DivLikes = styled.div`
//   position: relative;
//   text-align: center;
//   display: flex;
//   flex-direction: row;
// `;

// export const Like = styled.div`
//   color: var(--red-button);
//   cursor: pointer;
//   border-radius: 60%;
//   width: 50px;
//   height: 50px;

//   & .smile {
//     width: 50px;
//     height: 50px;
//   }

//   & p {
//     font-family: var(--font-family-primary);
//     font-weight: bold;
//     font-size: 18px;
//   }

//   @media only screen and (min-width: 800px) {
//     :hover {
//       box-shadow: 0px 0px 20px 1px var(--red-button);
//       transform: scale(1.05);
//     }
//   }
// `;

// export const Dislike = styled(Like)`
//   & .sad {
//     width: 50px;
//     height: 50px;
//   }
// `;

// export const ImageDiv = styled.div`
//   max-width: 90%;
//   max-height: 50%;
//   border: 4px solid gold;
//   border-radius: 10px;
//   margin: 0 auto;
//   background-color: #f5f5f5;

//   & > img {
//     width: 100%;
//     height: 100%;
//     border-radius: 8px;
//     object-fit: scale-down;
//   }
// `;

// export const Div = styled.div`
//   width: 209px;
//   height: 593px;
//   border: 1px #000 solid;
//   background-color: #dcdcdc;
//   display: flex;
//   flex-direction: column;
//   text-align: center;

//   p {
//     color: #000;
//   }
//   @media only screen and (min-width: 400px) {
//   }
//   @media only screen and (min-width: 800px) {
//   }
// `;

export const Container = styled.section`
  width: 90vw;
  max-width: 90vw;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  & > div.toH1 {
    max-width: 20px;
    position: absolute;
    left: -81px;
  }
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    overflow: visible;
    flex-direction: column;
    width: 100%;
    & > div.toH1 {
      max-width: 100%;
      position: static;
    }
  }
`;

export const H1 = styled.h1`
  margin-top: 0px;
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
  min-width: 300px;
  height: 40px;
  background-color: #0d3b4f;
  color: #76f7ff;
  text-align: center;
  font-size: 30px;
  display: block;
  transform: rotate(-90deg);
  flex-basis: 5px;
  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    transform: rotate(0deg);
    min-width: 170px;
  }
`;
