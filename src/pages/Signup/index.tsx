import Register from "../../components/Register";
import { Container, Div, Title } from "./styles";

const Signup = () => {
    return (
        <>
            <Container>
                <Div>
                    <div>
                        <Title>Geek Legends</Title>
                    </div>
                </Div>
                <Div>
                    <Register />
                </Div>
            </Container>
        </>
    );
};

export default Signup;
