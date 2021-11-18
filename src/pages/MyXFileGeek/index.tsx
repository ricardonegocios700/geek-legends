import Header from "../../components/Header";
import XFilesForm from "../../components/XFilesForm";
import { Container, Button } from "./styles";
import XFileListCard from "../../components/XFileListCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import { useAuth } from "../../Providers/user";
import { useHistory } from "react-router";

const pageTransition = {
  ease: "easeIn",
  duration: 1,
};

const MyXFileGeek = () => {
  const [isShow, setIsShow] = useState(false);

  const history = useHistory();
  const { authorized } = useAuth();

  if (!authorized) {
    history.push("/");
  }

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100vw" }}
        transition={pageTransition}
      >
        <Container>
          <Button onClick={() => setIsShow(!isShow)}>
            {!isShow ? "Add coment" : "Close form"}
            {!isShow ? (
              <RiArrowDownSFill style={{ fontSize: "30px" }} />
            ) : (
              <RiArrowUpSFill style={{ fontSize: "30px" }} />
            )}
          </Button>
          {isShow && <XFilesForm />}
          <XFileListCard />
          <audio autoPlay={true} controls={false} loop={true}>
            <source
              src="https://ringtonazer.b-cdn.net/fetch/0a/0ad19b7272c992b5b91a398c40c34f84.mp3"
              type="audio/mp3"
            />
            seu navegador não suporta HTML5
          </audio>
        </Container>
      </motion.div>
    </>
  );
};

export default MyXFileGeek;
