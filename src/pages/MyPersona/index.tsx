import Header from "../../components/Header";
import CardMyPersona from "../../components/cardMypersona";
import { useAuth } from "../../Providers/user";
import { motion } from "framer-motion";
import { ContainerMyPersona } from "./styles";
import { usePersonas } from "../../Providers/myPersonas";

const pageTransition = {
  // ease: "easeIn",
  duration: 1,
};

interface CardUsersData {
  id?: number;
  name: string;
  preferences: string;
}

interface UsersType {
  name: string;
  preferences: string;
  userId: number;
  id: number;
}

const MyPersona = () => {
  const { myPersonas } = usePersonas();
  console.log(myPersonas);
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100w" }}
        transition={pageTransition}
      >
        <ContainerMyPersona>
          <ul>
            {myPersonas[0] &&
              myPersonas.map((item: UsersType, index: number) => (
                <CardMyPersona
                  key={index}
                  id={item.id}
                  name={item.name}
                  preferences={item.preferences}
                />
              ))}
          </ul>
          <audio autoPlay={true} controls={false} loop={true}>
            <source
              src="https://ringtonazer.b-cdn.net/fetch/d2/d280c32f4d4e2bad0737097a0d56e8e9.mp3"
              type="audio/mp3"
            />
            seu navegador não suporta HTML5
          </audio>
        </ContainerMyPersona>
      </motion.div>
    </>
  );
};

export default MyPersona;
