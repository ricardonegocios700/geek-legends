import Card from "../Card";

interface CardProps {
  image: string;
  name: string;
  url?: string;
  preferences?: string;
  like: string | number | undefined;
  dislike: string | number | undefined;
  handleClick?: (arg: number) => number;
  handleAddPersona?: () => void;
}

const ListCard = ({ dataToRender }: any) => {
  console.log(dataToRender);

    return (

      <>
      {dataToRender[0] && dataToRender.map((data: CardProps, index: number) => (
        <Card 
          key={index}
          img={data.image}
          name={data.name}
          like={data.like}
          dislike={data.dislike}
          url= {data.url}
        />
      ))}
      </>

    )
};

export default ListCard;
