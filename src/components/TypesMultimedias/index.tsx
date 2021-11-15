import { useEffect, useState } from "react";
import { useMultimedia } from "../../Providers/multimedia";
import { H1, Div, Container } from "./style";
//import Card from "../CardMultmedia";
//({ dataToRender, ...rest }: any)
interface MultimediaTypes {
  title: string;
  type: string;
  like?: number;
  dislike?: number;
  image: string;
  description: string;
  id: number;
  userId?: number;
}
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
          <p>{typeof item}</p>
          <p> {item.title}</p>
          <p> {item.type}</p>
          {/* <Card item={item} />  //TODO não passa */}
        </Div>
      ))}
    </Container>
  );
};

export default TypesMultimedia;
