import Header from "../../components/Header";
import { Container } from "./styles";
import ListCardGeekStore from "../../components/ListCardGeekStore/index";
import { useStore } from "../../Providers/store";
import { useEffect } from "react";

const GeekStore = () => {
  const { stores, getStores } = useStore();
  
  useEffect(() => {
    getStores(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ListCardGeekStore dataToRender={stores} />
      </Container>
    </>
  );
};

export default GeekStore;
