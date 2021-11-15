import { Container } from "./styles";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useXFile } from "../../Providers/xfile/index";

interface XFileTypes {
    title: string;
    text: string;
    date: string;
    id: number;
}

const XFileCard = ({ title, text, date, id }: XFileTypes) => {
    const { deletePost } = useXFile();

    return (
        <>
            <Container>
                <article>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </article>

                <div>
                    <span>{date}</span>
                    <button onClick={() => deletePost(id)}>
                        <RiDeleteBack2Fill />
                    </button>
                </div>
            </Container>
        </>
    );
};

export default XFileCard;
