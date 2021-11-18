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
      <audio autoPlay={true} controls={false} loop={true} preload="auto">
        <source
          src={
            "https://m.toqueparacelular.com.br/a/n04/caixinha_de_musica-harry_potter.mp3"
          }
          type="audio/mp3"
        />
        seu navegador não suporta HTML5
      </audio>
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
