import { useAuth } from "../../Providers/user";
import logoUsers from "./../../assets/logoUsers.png";
import { CardPersonaStyle } from "./styles";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}

const CardPersona = ({ id, name, preferences }: CardUsersData) => {
  const { getOneUserForAddMyPersona } = useAuth();
  const handlerAddMypersona = ({ id, name, preferences }: CardUsersData) => {
    getOneUserForAddMyPersona({ id, name, preferences });
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
