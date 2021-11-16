import { Container, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useMyStores } from "../../Providers/myStore/index";
import { useStore } from "../../Providers/store";
import { TiDelete } from 'react-icons/ti'

interface CardProps {
    img: string;
    name: string;
    url?: string;
    like: number;
    dislike: number;
    segment?: string;
    id: number;
    userId: number;
    handleClick?: (data: CardProps) => void;
    handleAddCard?: (data: CardProps) => void;
}

interface LocationTypes {
    pathname: string;
}
interface PathProps {
    location: LocationTypes;
}

const CardGeekStore = ({
    img,
    name,
    url = "https://www.google.com.br",
    like,
    dislike,
    id,
    userId,
    handleClick,
    handleAddCard,
}: CardProps) => {
    const location = useLocation<PathProps>();
    const { addMyStore, removeMyStore } = useMyStores();
    const { updateStoreLike, updateStoreDeslike } = useStore()

    const data = {
        segment: "",
        userId,
        image: img,
        name,
        url,
        like,
        dislike,
        id,
        handleAddCard,
        handleClick,
    };
    
    return (
        <>
            <Container>
                <ImageDiv>
                    <img src={img} alt={name} />
                </ImageDiv>

                <Info>
                    <h1>{name}</h1>
                    <p>
                        <a href={url} target="_about">
                            Site 
                        </a>
                    </p>
                </Info>

                <div className="emojis">
                    {location.pathname === "/geekstore" && <Like>
                        <BsEmojiHeartEyesFill
                            className="smile"
                            onClick={() => updateStoreLike(data)}
                        />
                        <p>{like}</p>
                    </Like>}
                    {location.pathname === "/geekstore" ? (
                        <IoMdAddCircle
                            onClick={() => addMyStore(data)}
                            className="addCard"
                        />
                    ) : 
                    <TiDelete 
                    onClick={() => removeMyStore(data.id)}
                    className="delCard"/>
                    }
                    {location.pathname === "/geekstore" && <Dislike>
                        <BsEmojiFrownFill
                            className="sad"
                            onClick={() => updateStoreDeslike(data)}
                        />
                        <p>{dislike}</p>
                    </Dislike>}
                </div>
            </Container>
        </>
    );
};

export default CardGeekStore;
