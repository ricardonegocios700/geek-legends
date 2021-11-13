import Header from "../../components/Header";
import { Container } from "./styles";
import Card from "../../components/Card";

const GeekStore = () => {
    return (
        <>
            <Header />
            <div></div>
            <Container>

                <Card 
                    img='https://idris.com.br/dev/wp-content/themes/Idris/timthumb.php?src=https://idris.com.br/dev/wp-content/uploads/2018/03/fantastic-full-metal-alchemist-poster-and-awesome-ideas-of-fullmetal-alchemist-brotherhood-768x1095.jpg&w=821&h=400&zc=1'
                    dislike='0'
                    like='3'
                    handleAddPersona={() => null}
                    handleClick={() => 1}
                    name='nome'
                />
            </Container>
        </>
    );
};

export default GeekStore;
