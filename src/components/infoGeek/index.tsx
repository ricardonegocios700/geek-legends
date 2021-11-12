import { useAuth } from "../../Providers/user";
import logoUser from "./../../assets/logoUser.png";
import { Container } from "./styles";

export const InfoGeek = () => {
  const { user } = useAuth();
  return (
    <Container>
      <h3>Info Geek</h3>
      <h5>{user.name}</h5>
      <img src={logoUser} alt="logoUser"></img>
      <h6>preferencias</h6>
      <p>{user.preferences}</p>
      <h6>about me</h6>
      <p>{user.aboutMe ? user.aboutMe : "Nada a declarar"}</p>
      <button>atualização de usuário</button>
    </Container>
  );
};

export default InfoGeek;
