import { useEffect } from "react";

import { Container, Div } from "./styles";

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
    <Container>
      <Header />
      <Div>
        <TypesMultimedia dataToRender={multimediaByFilmes} title="Filmes" />
        <TypesMultimedia dataToRender={multimediaBySeries} title="Séries" />
        <TypesMultimedia dataToRender={multimediaByAnimes} title="Animes" />
        <TypesMultimedia dataToRender={multimediaByGames} title="Games" />
        <TypesMultimedia dataToRender={multimediaByGibis} title="Gibis" />
      </Div>
    </Container>
  );
};

export default Multimedia;
