import { usePersonas } from "../../Providers/myPersonas";
import { useAuth } from "../../Providers/user";
import logoUsers from "./../../assets/logoUsers.png";
import { CardPersonaStyle } from "./styles";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}

const CardPersona = ({ id, name, preferences }: CardUsersData) => {
  const { addMyPersonas } = usePersonas();
  const { userId } = useAuth();
  const handlerAddMypersona = ({ id, name, preferences }: CardUsersData) => {
    addMyPersonas({ id, name, preferences, userId });
  };

  return (
    <CardPersonaStyle>
      <img src={logoUsers} alt={"imagem"} />
      <h4>{name}</h4>
      <p>{preferences}</p>
      <button onClick={() => handlerAddMypersona({ id, name, preferences })}>
        add persona
      </button>
    </CardPersonaStyle>
  );
};

export default CardPersona;
