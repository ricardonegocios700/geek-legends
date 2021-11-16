import Header from "../../components/Header";
import XFilesForm from "../../components/XFilesForm";
import { Container, Button } from "./styles";
import XFileListCard from "../../components/XFileListCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDownSFill } from 'react-icons/ri';
import { RiArrowUpSFill } from 'react-icons/ri';

const pageTransition = {
  ease: "easeIn",
  duration: 1,
};

const MyXFileGeek = () => {

  const [ isShow, setIsShow ] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100w" }}
        transition={pageTransition}
      >
        <Header />
        <Container>
          <Button
            onClick={() => setIsShow(!isShow)}
          >
            {!isShow ? 'Add coment' : 'Close form'}
            {!isShow ? <RiArrowDownSFill 
              style={{fontSize: '30px'}} /> : <RiArrowUpSFill style={{fontSize: '30px'}}/>}
              
          </Button>
          {isShow && <XFilesForm />}
          <XFileListCard />
        </Container>
      </motion.div>
    </>
  );
};

export default MyXFileGeek;
