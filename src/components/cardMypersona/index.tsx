import { usePersonas } from "../../Providers/myPersonas";
import logoUsers from "./../../assets/logoUsers.png";
import { CardPersonaStyle } from "./styles";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}

const CardMyPersona = ({ id, name, preferences }: CardUsersData) => {
  const { removeMyPersonas } = usePersonas();
  const handlerADeleteMypersona = ({
    id,
    name,
    preferences,
  }: CardUsersData) => {
    removeMyPersonas(id);
  };

  return (
    <CardPersonaStyle>
      <img src={logoUsers} alt={"imagem"} />
      <h4>{name}</h4>
      <p>{preferences}</p>
      <button
        onClick={() => handlerADeleteMypersona({ id, name, preferences })}
      >
        expulse persona
      </button>
    </CardPersonaStyle>
  );
};

export default CardMyPersona;
