import Header from "../../components/Header";
import { motion } from "framer-motion";

const MyMultimedia = () => {
  const pageTransition = {
    ease: "easeIn",
    duration: 1,
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100h" }}
        transition={pageTransition}
      >
        <Header />
      </motion.div>
    </>
  );
};

export default MyMultimedia;
