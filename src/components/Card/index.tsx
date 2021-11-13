import { Container, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";

interface CardProps {
    img: string;
    name: string;
    url?: string;
    preferences?: string;
    like: string;
    dislike: string;
    handleClick: (arg: number) => number;
    handleAddPersona: () => void;
}

interface LocationTypes {
    pathname: string;
}
interface PathProps {
    location: LocationTypes;
}

const Card = ({
    img,
    name,
    url = "https://www.google.com.br",
    preferences,
    like,
    dislike,
    handleClick,
    handleAddPersona
}: CardProps) => {
    const location = useLocation<PathProps>();

    return (
        <>
            <Container>
                <ImageDiv>
                    <img src={img} alt="nome" />
                </ImageDiv>

                <Info>
                    <h1>{name}</h1>
                    <p>
                        {location.pathname === "/persona" ? (
                            <p>{preferences}</p>
                        ) : location.pathname === "/geekstore" ? (
                            <a href={url}>Site</a>
                        ) : null}
                    </p>
                </Info>

                <div className="emojis">
                    <Like>
                        <BsEmojiHeartEyesFill
                            className="smile"
                            onClick={() => handleClick(1)}
                        />
                        <p>{like}</p>
                    </Like>
                    {location.pathname === "/persona" && (
                        <IoMdAddCircle 
                            onClick={handleAddPersona}
                            className="addCard" />
                    )}
                    <Dislike>
                        <BsEmojiFrownFill
                            className="sad"
                            onClick={() => handleClick(-1)}
                        />
                        <p>{dislike}</p>
                    </Dislike>
                </div>
            </Container>
        </>
    );
};

export default Card;
