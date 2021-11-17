import { Container2, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useMultimedia } from "../../Providers/multimedia";
import { useMyMultimedias } from "../../Providers/myMultimedias";

interface MultimediaTypes {
  id: number;
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  userId: number;
  reaction?: number;
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
    multimediaId: id,
  };
  const { multimediaUserReaction } = useMultimedia();
  const { addToMyMultimedias } = useMyMultimedias();
  const location = useLocation<PathProps>();
  const handleClickLike = (reaction: Number) => {
    multimediaUserReaction(mediaData, Number(reaction));
  };

  const handleClikeFavorite = () => {
    addToMyMultimedias(mediaData);
  };

  return (
    <Container2>
      <ImageDiv>
        <img src={image} alt="nome" />
      </ImageDiv>

      <Info>
        <h1>{title}</h1>
      </Info>

      <div className="emojis">
        <Like>
          <BsEmojiHeartEyesFill
            className="smile"
            onClick={() => handleClickLike(1)}
          />
          <p>{like}</p>
        </Like>
        {location.pathname === "/multimedia" && (
          <IoMdAddCircle className="addCard" onClick={handleClikeFavorite} />
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
