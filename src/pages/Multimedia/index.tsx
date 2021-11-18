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
