import Header from "../../components/Header";
import { Container } from "./styles";
import ListCardGeekStore from "../../components/ListCardGeekStore/index";
import { useStore } from "../../Providers/store";
import { useEffect } from "react";

const GeekStore = () => {
  const { stores, getStores } = useStore();

  console.log(stores);
  useEffect(() => {
    getStores();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ListCardGeekStore dataToRender={stores} />
        <audio autoPlay={true} controls={false} loop={true}>
          <source
            src="https://ringtonazer.b-cdn.net/fetch/d0/d0f559cdc2f26268a49690781874db55.mp3"
            type="audio/mp3"
          />
          seu navegador não suporta HTML5
        </audio>
      </Container>
    </>
  );
};

export default GeekStore;
