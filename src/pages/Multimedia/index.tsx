import { useEffect } from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import { useAuth } from "../../Providers/user";
import { useMultimedia } from "../../Providers/multimedia";
import TypesMultimedia from "../../components/TypesMultimedias";

const Multimedia = () => {
  const { config } = useAuth();
  const {
    multimediaByFilmes,
    multimediaBySeries,
    multimediaByAnimes,
    multimediaByGames,
    multimediaByGibis,
    getMultimediaByType,
  } = useMultimedia();

  useEffect(() => {
    getMultimediaByType();
  }, [config]);

  return (
    <>
      <Header />
      <audio autoPlay={true} controls={false} loop={true} preload="auto">
        <source src="../../assets/mp3/Harry_Potter.mp3" type="audio/mp3" />
        seu navegador não suporta HTML5
      </audio>
      <Container>
        <TypesMultimedia dataToRender={multimediaByFilmes} />
        <TypesMultimedia dataToRender={multimediaBySeries} />
        <TypesMultimedia dataToRender={multimediaByAnimes} />
        <TypesMultimedia dataToRender={multimediaByGames} />
        <TypesMultimedia dataToRender={multimediaByGibis} />
      </Container>
    </>
  );
};

export default Multimedia;
