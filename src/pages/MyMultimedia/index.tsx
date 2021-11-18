import { useEffect } from "react";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useMyMultimedias } from "../../Providers/myMultimedias";
import { useAuth } from "../../Providers/user";
import TypesMultimedia from "../../components/TypesMultimedias";

const MyMultimedia = () => {
  const pageTransition = {
    ease: "easeIn",
    duration: 1,
  };
  const { config } = useAuth();
  const {
    myMultimediaByFilmes,
    myMultimediaBySeries,
    myMultimediaByAnimes,
    myMultimediaByGames,
    myMultimediaByGibis,
    getMyMultimediaByType,
  } = useMyMultimedias();

  useEffect(() => {
    getMyMultimediaByType();
  }, [config]);
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100h" }}
        transition={pageTransition}
      >
        <Container>
          <TypesMultimedia dataToRender={myMultimediaByFilmes} />
          <TypesMultimedia dataToRender={myMultimediaBySeries} />
          <TypesMultimedia dataToRender={myMultimediaByAnimes} />
          <TypesMultimedia dataToRender={myMultimediaByGames} />
          <TypesMultimedia dataToRender={myMultimediaByGibis} />
        </Container>
      </motion.div>
    </>
  );
};

export default MyMultimedia;
