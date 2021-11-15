import Header from "../../components/Header";
import { motion } from "framer-motion";

const pageTransition = {
    // ease: "easeIn",
    duration: 1,
};

const MyPersona = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100w" }}
                transition={pageTransition}
            >
                <Header />
            </motion.div>
        </>
    );
};

export default MyPersona;
