import Header from "../../components/Header";
import { Container } from "./styles";
import ListCardGeekStore from "../../components/ListCardGeekStore/index";
import { useMyStores } from "../../Providers/myStore/index";
import { useEffect } from "react";
import { motion } from "framer-motion";

const pageTransition = {
  ease: "easeIn",
  duration: 1,
};

const MyGeekStore = () => {
  const { myStores, getMyStores, removeMyStore } = useMyStores();

  useEffect(() => {
    getMyStores();
  }, []);

  return (
    <>
      <Header />
      <motion.div
        style={{ position: "relative" }}
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100h" }}
        transition={pageTransition}
      >
        <Container>
          <ListCardGeekStore
            dataToRender={myStores}
            // handleRemove={removeMyStore}
          />
          <audio autoPlay={true} controls={false} loop={true}>
            <source
              src="https://ringtonazer.b-cdn.net/fetch/d0/d0f559cdc2f26268a49690781874db55.mp3"
              type="audio/mp3"
            />
            seu navegador não suporta HTML5
          </audio>
        </Container>
      </motion.div>
    </>
  );
};

export default MyGeekStore;
