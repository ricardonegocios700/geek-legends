import { useEffect, useState } from "react";
import { useMultimedia } from "../../Providers/multimedia";
import { DivLikes, Like, Dislike, ImageDiv, H1, Div, Container } from "./style";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
//import Card from "../CardMultmedia";

//({ dataToRender, ...rest }: any)
// interface MultimediaTypes {
//   title: string;
//   type: string;
//   like: number;
//   dislike: number;
//   image: string;
//   description: string;
//   id: number;
// }

// TODO  typeValue não é any, eu quero que seja uma string
const TypesMultimedia = ({ typeValue }: any) => {
  const { multimediaByType, getMultimediaByType } = useMultimedia();

  useEffect(() => {
    getMultimediaByType(typeValue);
  }, []);

  return (
    <Container>
      <H1>{typeValue}</H1>
      {multimediaByType.map((item, index) => (
        <Div key={index}>
          <ImageDiv>
            <img src={item.image} alt={item.title} />
          </ImageDiv>
          <p>{item.title}</p>
          <p>add</p>
          <DivLikes>
            <Like>
              <BsEmojiHeartEyesFill className="smile" />
              <p>{item.like}</p>
            </Like>
            <Dislike>
              <BsEmojiFrownFill className="smile" />
              <p>{item.dislike}</p>
            </Dislike>
          </DivLikes>

          {/*<Card item={item} /> TODO não passa*/}
        </Div>
      ))}
    </Container>
  );
};

export default TypesMultimedia;
