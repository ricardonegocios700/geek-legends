import { useAuth } from "../../Providers/user";
import logoUsers from "./../../assets/logoUsers.png";
import { CardPersonaStyle } from "./styles";

interface CardUsersData {
  name: string;
  preferences: string;
}

const CardMyPersona = ({ name, preferences }: CardUsersData) => {
  const { usersListAdd, setUsersListAdd } = useAuth();
  const handlerADeleteMypersona = ({ name, preferences }: CardUsersData) => {
    const newList = usersListAdd.filter((person) => person.name !== name);
    setUsersListAdd(newList);
    console.log(newList);
  };

  return (
    <CardPersonaStyle>
      <img src={logoUsers} alt={"imagem"} />
      <h4>{name}</h4>
      <p>{preferences}</p>
      <button onClick={() => handlerADeleteMypersona({ name, preferences })}>
        expulse persona
      </button>
    </CardPersonaStyle>
  );
};

export default CardMyPersona;
