import { H1, Container } from "./style";
import Card from "../CardMultmedia";

interface CardProps {
  id: number;
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  userId: number;
}

const TypesMultimedia = ({ dataToRender }: any) => {
  console.log("existem dados?", dataToRender[0]);
  if (dataToRender[0] === undefined) {
    return <></>;
  } else {
    return (
      <Container>
        <H1>{dataToRender[0]?.type}</H1>
        {dataToRender[0] &&
          dataToRender.map((data: CardProps, index: number) => (
            <Card
              key={index}
              id={data.id}
              title={data.title}
              type={data.type}
              like={data.like}
              dislike={data.dislike}
              image={data.image}
              description={data.description}
              userId={data.userId}
            />
          ))}
      </Container>
    );
  }
};

export default TypesMultimedia;
