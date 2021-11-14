import { useEffect } from "react";
import { useAuth } from "../../Providers/user";
import logoUser from "./../../assets/logoUser.png";
import { Container } from "./styles";

export const InfoGeek = () => {
  const { userInfo, userId, getOneUser, config } = useAuth();
  useEffect(() => {
    getOneUser(userId);
  }, [config]);

  if (userInfo === undefined) {
    console.log("aguardando");
  }

  return (
    <Container>
      <h3>Info Geek</h3>
      <h5>{userInfo.name ? userInfo.name : "carregando..."}</h5>
      <img src={logoUser} alt="logoUser"></img>
      <h6>preferencias</h6>
      <p>{userInfo.preferences ? userInfo.preferences : "carregando..."}</p>
      <h6>about me</h6>
      <p>{userInfo.aboutMe ? userInfo.aboutMe : "Nada a declarar"}</p>
      <button>atualização de usuário</button>
    </Container>
  );
};

export default InfoGeek;
