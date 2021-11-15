import { useEffect, useState } from "react";
import { useMultimedia } from "../../Providers/multimedia";
import Card from "../CardMultmedia";
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
    <>
      <h1>Lista</h1>
      {multimediaByType.map((item, index) => (
        <div key={index}>
          <p>
            {typeof item} {item.title} {item.type}
          </p>
          {/* <Card item={item} />  //TODO não passa */}
        </div>
      ))}
    </>
  );
};

export default TypesMultimedia;
