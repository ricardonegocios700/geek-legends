import { Container2, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";

interface CardProps {
  img: string;
  name: string;
  type?: string;
  url?: string;
  preferences?: string;
  like: string | number | undefined;
  dislike: string | number | undefined;
  handleClick?: (arg: number) => number;
  handleAddPersona?: () => void;
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
  type,
  handleClick,
  handleAddPersona,
}: CardProps) => {
  const location = useLocation<PathProps>();
  return (
    <Container2>
      <ImageDiv>
        <img src={img} alt="nome" />
      </ImageDiv>

      <Info>
        <h1>{name}</h1>
        <p>
          {location.pathname === "/persona" ? (
            <p>{preferences}</p>
          ) : location.pathname === "/geekstore" ? (
            <a href={url} target="_about">
              Site
            </a>
          ) : null}
        </p>
      </Info>

      <div className="emojis">
        <Like>
          <BsEmojiHeartEyesFill className="smile" />
          <p>{like}</p>
        </Like>
        {location.pathname === "/persona" && (
          <IoMdAddCircle onClick={handleAddPersona} className="addCard" />
        )}
        <Dislike>
          <BsEmojiFrownFill className="sad" />
          <p>{dislike}</p>
        </Dislike>
      </div>
    </Container2>
  );
};

export default Card;
