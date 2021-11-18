import Register from "../../components/Register";
import { Container, Div, Div1, Title } from "./styles";

const Signup = () => {
  return (
    <>
      <Container>
        <Div1>
          <div>
            <Title>GeekLegends</Title>
            <p>Cadastre-se para ter acesso ao mundo Geek</p>
          </div>
        </Div1>

        <Div>
          <Register />
        </Div>
      </Container>
    </>
  );
};

export default Signup;
