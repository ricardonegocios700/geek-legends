import Header from "../../components/Header";
import { Container } from "./styles";
import ListCard from "../../components/ListCard/index";
import { useMyStores } from "../../Providers/myStore/index";
import { useEffect } from "react";

const MyGeekStore = () => {

    const { myStores, getMyStores, removeMyStore } = useMyStores();

    useEffect(() => {
        getMyStores()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <ListCard dataToRender={myStores} handleRemove={removeMyStore}/>
            </Container>
        </>
    );
};

export default MyGeekStore;
