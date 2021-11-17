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
        <TypesMultimedia dataToRender={multimediaByFilmes} />
        <TypesMultimedia dataToRender={multimediaBySeries} />
        <TypesMultimedia dataToRender={multimediaByAnimes} />
        <TypesMultimedia dataToRender={multimediaByGames} />
        <TypesMultimedia dataToRender={multimediaByGibis} />
      </Div>
    </Container>
  );
};

export default Multimedia;
