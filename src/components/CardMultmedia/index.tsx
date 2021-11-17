import { Container2, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useMultimedia } from "../../Providers/multimedia";

interface MultimediaTypes {
  id: number;
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  userId: number;
  reaction: number;
}

interface CardProps {
  id: number;
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  userId: number;
  handleAddPersona?: () => void;
}

interface LocationTypes {
  pathname: string;
}
interface PathProps {
  location: LocationTypes;
}

const Card = ({
  id,
  title,
  type,
  like,
  dislike,
  image,
  description,
  userId,
}: CardProps) => {
  const mediaData = {
    id: id,
    title: title,
    type: type,
    like: like,
    dislike: dislike,
    image: image,
    description: description,
    userId: userId,
  };
  const { multimediaUserReaction } = useMultimedia();
  const location = useLocation<PathProps>();
  const handleClickLike = (reaction: Number) => {
    multimediaUserReaction(mediaData, Number(reaction));
  };
  return (
    <Container2>
      <ImageDiv>
        <img src={image} alt="nome" />
      </ImageDiv>

      <Info>
        <h1>{title}</h1>
        <p>
          {location.pathname === "/persona" ? (
            <p>{title}</p>
          ) : location.pathname === "/geekstore" ? (
            <a href="www.google.com.br" target="_about">
              Site
            </a>
          ) : null}
        </p>
      </Info>

      <div className="emojis">
        <Like>
          <BsEmojiHeartEyesFill
            className="smile"
            onClick={() => handleClickLike(1)}
          />
          <p>{like}</p>
        </Like>
        {location.pathname === "/persona" && (
          <IoMdAddCircle className="addCard" />
        )}
        <Dislike>
          <BsEmojiFrownFill
            className="sad"
            onClick={() => handleClickLike(-1)}
          />
          <p>{dislike}</p>
        </Dislike>
      </div>
    </Container2>
  );
};

export default Card;
