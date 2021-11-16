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
      </ContainerPersona>
    </>
  );
};

export default Persona;
