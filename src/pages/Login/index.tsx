import Form from "../../components/Login/";
import { ContainerText, DivText, Title, Container, Text } from "./styles";

const Login = () => {
  return (
    <Container>
      <Form />
      <ContainerText>
        <Title>GeekLegends</Title>
        <DivText>
          <Text>
            <p>Sua entrada para o mundo Geek!!!</p>
            <p>
              Encontre pessoas, busque por filmes ou animes de seu interesse!!
            </p>
            <p>Localize o seu ‘mimo’ favorito e aumente a sua coleção!!</p>
          </Text>
        </DivText>
        <audio autoPlay={true} controls={false} loop={true} preload="auto">
          <source
            src="https://streaming-std.qobuz.com/file?eid=53401839&fmt=5&app_id=172934108&range=20-30&etsp=1637305259&hmac=LAikF3DZowOyBFUJtH6MJArpadg"
            type="audio/mp3"
          />
          seu navegador não suporta HTML5
        </audio>
      </ContainerText>
    </Container>
  );
};

export default Login;
