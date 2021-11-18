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
    const { myStores, getMyStores } = useMyStores();

    useEffect(() => {
        getMyStores(); // eslint-disable-next-line
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
                </Container>
            </motion.div>
        </>
    );
};

export default MyGeekStore;
