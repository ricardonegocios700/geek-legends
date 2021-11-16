import { H1, Div, Container } from "./style";
import Card from "../CardMultmedia";

interface CardProps {
  title: string;
  type: string;
  like?: number;
  dislike?: number;
  image: string;
  description: string;
  id?: number;
  userId?: number;
}

const TypesMultimedia = ({ dataToRender }: any, title: string) => {
  return (
    <Container>
      {/* <h1>{title}</h1> */}
      {dataToRender[0] &&
        dataToRender.map((data: CardProps, index: number) => (
          <Card
            key={index}
            img={data.image}
            name={data.title}
            like={data.like}
            dislike={data.dislike}
            url=""
            type={data.type}
          />
        ))}
    </Container>
  );
};

export default TypesMultimedia;
