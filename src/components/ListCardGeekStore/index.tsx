import CardGeekStore from "../CardGeekStore";

interface CardProps {
  userId: number;
  id: number;
  image: string;
  name: string;
  url?: string;
  preferences?: string;
  like: number;
  dislike: number;
  handleClick?: (arg: number) => number;
  handleAddPersona?: () => void;
}

const ListCardGeekStore = ({ dataToRender }: any) => {  

    return (

      <>
      {dataToRender[0] && dataToRender.map((data: CardProps, index: number) => (
        <CardGeekStore 
          key={index}
          img={data.image}
          name={data.name}
          like={data.like}
          dislike={data.dislike}
          url= {data.url}
          id={data.id}
          userId= {data.userId}
        />
      ))}
      </>

    )
};

export default ListCardGeekStore;
