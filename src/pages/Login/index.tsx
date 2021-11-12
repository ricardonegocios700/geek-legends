import Form from "../../components/Login/";
import { Title, Container, Text } from "./styles";

const Login = () => {
  return (
    <Container>
      <Form />
      <div>
        <Title>Geek Legends</Title>
        <Text>
          <p>Sua entrada para o mundo Geek!!!</p>
          <p>
            Encontre pessoas, busque por filmes ou animes de seu interesse!!
          </p>
          <p>Localize o seu ‘mimo’ favorito e aumente a sua coleção!!</p>
        </Text>
      </div>
    </Container>
  );
};

export default Login;
