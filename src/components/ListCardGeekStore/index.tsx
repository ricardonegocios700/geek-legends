import CardGeekStore from "../CardGeekStore";
import { useAuth } from '../../Providers/user/index';

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

  const { userId } = useAuth();

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
          userId= {userId}
        />
      ))}
      </>

    )
};

export default ListCardGeekStore;
