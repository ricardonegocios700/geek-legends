import { useEffect, useState } from "react";
import { useMultimedia } from "../../Providers/multimedia";
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
  const [type, setType] = useState<MultimediaTypes[]>({} as MultimediaTypes[]);

  useEffect(() => {
    getMultimediaByType(typeValue);
  }, []);

  return (
    <>
      {console.log(typeValue, multimediaByType)}
      <h1>Lista</h1>
      {/*multimediaByType.map((item, index) => (
        <p key={index}> {item.title}</p>
      ))*/}
    </>
  );
};

export default TypesMultimedia;
