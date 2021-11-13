import Form from "../../components/Login/";
import { ContainerText, DivText, Title, Container, Text } from "./styles";

const Login = () => {
  return (
    <Container>
      <Form />
      <ContainerText>
        <Title>Geek Legends</Title>
        <DivText>
          <Text>
            <p>Sua entrada para o mundo Geek!!!</p>
            <p>
              Encontre pessoas, busque por filmes ou animes de seu interesse!!
            </p>
            <p>Localize o seu ‘mimo’ favorito e aumente a sua coleção!!</p>
          </Text>
        </DivText>
      </ContainerText>
    </Container>
  );
};

export default Login;
