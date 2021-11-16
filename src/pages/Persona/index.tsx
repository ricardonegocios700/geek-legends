import CardPersona from "../../components/CardPersona";
import Header from "../../components/Header";
import { useAuth } from "../../Providers/user";

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}

const Persona = () => {
  const { usersList } = useAuth();
  console.log(usersList);

  return (
    <>
      <Header />
      {usersList[0] &&
        usersList.map((item: CardUsersData) => (
          <CardPersona
            key={item.id}
            id={item.id}
            name={item.name}
            preferences={item.preferences}
          />
        ))}
    </>
  );
};

export default Persona;
