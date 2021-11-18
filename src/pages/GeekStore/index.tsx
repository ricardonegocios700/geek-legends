import Header from "../../components/Header";
import { Container } from "./styles";
import ListCardGeekStore from "../../components/ListCardGeekStore/index";
import { useStore } from "../../Providers/store";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../Providers/user";

const GeekStore = () => {
  const { stores, getStores } = useStore();
  const history = useHistory();
  const { authorized } = useAuth();

  useEffect(() => {
    getStores(); // eslint-disable-next-line
  }, []);

  if (!authorized) {
    history.push("/");
  }

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
