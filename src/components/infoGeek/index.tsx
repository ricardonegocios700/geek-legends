import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/user";
import UpdateUserModal from "../UserUpdateModal";
import logoUser from "./../../assets/logoUser.png";
import { Container } from "./styles";

export const InfoGeek = () => {
  const { userInfo, userId, getOneUser, config } = useAuth();
  const [showModal, setShowModal] = useState(false);
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
      <h6>sobre você</h6>
      <p>{userInfo.aboutMe ? userInfo.aboutMe : "Nada a declarar"}</p>
      <button onClick={() => setShowModal(!showModal)}>
        atualização de usuário
      </button>
      <UpdateUserModal show={showModal} handleClick={setShowModal} />
    </Container>
  );
};

export default InfoGeek;
