import Header from "../../components/Header";
import XFilesForm from "../../components/XFilesForm";
import { Container } from "./styles";
import XFileListCard from "../../components/XFileListCard";

const MyXFileGeek = () => {
    return (
        <>
            <Header />
            <Container>
                <XFilesForm />
                <XFileListCard />
            </Container>
        </>
    );
};

export default MyXFileGeek;
