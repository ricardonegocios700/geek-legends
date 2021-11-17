import CardPersona from "../../components/CardPersona";
import Header from "../../components/Header";
import { useAuth } from "../../Providers/user";
import { ContainerPersona } from "./styles";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}

const Persona = () => {
  const { usersList } = useAuth();

  return (
    <>
      <Header />
      <ContainerPersona>
        <ul>
          {usersList[0] &&
            usersList.map((item: CardUsersData) => (
              <CardPersona
                key={item.id}
                id={item.id}
                name={item.name}
                preferences={item.preferences}
              />
            ))}
        </ul>
        <audio autoPlay={true} controls={false} loop={true}>
          <source
            src="https://ringtonazer.b-cdn.net/fetch/7e/7ee7454efe64a845973d2d29cd1e807e.mp3"
            type="audio/mp3"
          />
          seu navegador não suporta HTML5
        </audio>
      </ContainerPersona>
    </>
  );
};

export default Persona;
