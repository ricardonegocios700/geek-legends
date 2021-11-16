import Header from "../../components/Header";
import { Container } from "./styles";
import ListCard from "../../components/ListCard/index";
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
        <ListCard dataToRender={stores} />
      </Container>
    </>
  );
};

export default GeekStore;
