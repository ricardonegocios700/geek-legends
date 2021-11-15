import Header from "../../components/Header";
import XFilesForm from "../../components/XFilesForm";
import { Container } from "./styles";
import XFileListCard from "../../components/XFileListCard";
import { motion } from "framer-motion";
import { fromUnixTime } from "date-fns";

const pageTransition = {
    ease: "easeIn",
    duration: 1,
};

const MyXFileGeek = () => {
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
                    <XFilesForm />
                    <XFileListCard />
                </Container>
            </motion.div>
        </>
    );
};

export default MyXFileGeek;
