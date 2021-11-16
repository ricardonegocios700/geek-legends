import { Container, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useMyStores } from '../../Providers/myStore/index';
import { useStore } from "../../Providers/store";

interface CardProps {
    img: string;
    name: string;
    url?: string;  
    like:  number;
    dislike: number;
    segment?: string;
    handleClick?: (arg: number) => number;
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
    handleClick,
    handleAddCard
}: CardProps) => {
    const location = useLocation<PathProps>();
    const { addMyStore } = useMyStores()

    const data = { segment: '', userId: 0, image:img, name, url, like, dislike, handleAddCard, handleClick }

    return (
        <>
            <Container>
                <ImageDiv>
                    <img src={img} alt={name} />
                </ImageDiv>

                <Info>
                    <h1>{name}</h1>
                    <p>
                        <a href={url} target='_about'>Site</a>
                    </p>
                </Info>

                <div className="emojis">
                    <Like>
                        <BsEmojiHeartEyesFill
                            className="smile"
                            // onClick={() => handleClick(1)}
                        />
                        <p>{like}</p>
                    </Like>
                    {location.pathname==='/geekstore' ? (
                        <IoMdAddCircle 
                            onClick={() => addMyStore(data)}
                            className="addCard" />
                    ) : null}
                    <Dislike>
                        <BsEmojiFrownFill
                            className="sad"
                            // onClick={() => handleClick(-1)}
                        />
                        <p>{dislike}</p>
                    </Dislike>
                </div>
            </Container>
        </>
    );
};

export default CardGeekStore;
