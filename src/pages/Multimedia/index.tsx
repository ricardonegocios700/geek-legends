import Header from "../../components/Header";
import TypesMultimedia from "../../components/TypesMultimedias";
import { Container, Div } from "./styles";
const Multimedia = () => {
  return (
    <Container>
      <Header />
      <Div>
        <TypesMultimedia typeValue="Filmes" />
        <TypesMultimedia typeValue="Animes" />
        <TypesMultimedia typeValue="Gibis" />
        <TypesMultimedia typeValue="Séries" />
        <TypesMultimedia typeValue="Games" />
      </Div>
    </Container>
  );
};

export default Multimedia;
