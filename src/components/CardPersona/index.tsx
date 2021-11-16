import { useAuth } from "../../Providers/user";
import logoUsers from "./../../assets/logoUsers.png";
import { CardPersonaStyle } from "./styles";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}
interface UserData {
  id: number;
  userId?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  preferences: string;
  aboutMe: string;
}

const CardPersona = ({ id, name, preferences }: CardUsersData) => {
  const userId = id;
  const { getOneUserForAddMyPersona } = useAuth();
  const handlerAddMypersona = (userId: UserData) => {
    getOneUserForAddMyPersona(userId);
  };

  return (
    <CardPersonaStyle>
      <img src={logoUsers} alt={"imagem"} width="50px" height="50px" />
      <p>{name}</p>
      <p>{preferences}</p>
      <button onClick={() => handlerAddMypersona}></button>
    </CardPersonaStyle>
  );
};

export default CardPersona;
