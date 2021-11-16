import Header from "../../components/Header";
import CardMyPersona from "../../components/cardMypersona";
import { useAuth } from "../../Providers/user";
import { motion } from "framer-motion";
import { ContainerMyPersona } from "./styles";

const pageTransition = {
  // ease: "easeIn",
  duration: 1,
};

interface CardUsersData {
  id: number;
  name: string;
  preferences: string;
}
interface UserData {
  userId?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  preferences: string;
  aboutMe: string;
}

const MyPersona = () => {
  const { usersListAdd } = useAuth();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100w" }}
        transition={pageTransition}
      >
        <Header />
        <ContainerMyPersona>
          <ul>
            {usersListAdd[0] &&
              usersListAdd.map((item: UserData) => (
                <CardMyPersona
                  key={item.userId}
                  name={item.name}
                  preferences={item.preferences}
                />
              ))}
          </ul>
        </ContainerMyPersona>
      </motion.div>
    </>
  );
};

export default MyPersona;
