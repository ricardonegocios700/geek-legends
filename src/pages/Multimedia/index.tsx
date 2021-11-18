import { useEffect } from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import { useAuth } from "../../Providers/user";
import { useMultimedia } from "../../Providers/multimedia";
import TypesMultimedia from "../../components/TypesMultimedias";
import { useHistory } from "react-router-dom";

const Multimedia = () => {
  const history = useHistory();
  const { config, authorized } = useAuth();
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

  if (!authorized) {
    history.push("/");
  }

  return (
    <>
      <Header />
      <audio autoPlay={true} controls={false} loop={true} preload="auto">
        <source
          src={
            "https://m.toqueparacelular.com.br/a/n04/caixinha_de_musica-harry_potter.mp3"
          }
          type="audio/mp3"
        />
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
