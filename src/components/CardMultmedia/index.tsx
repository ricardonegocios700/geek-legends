import { Container, ImageDiv, Like, Dislike, Info } from "./styles";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";

//const Card = (item: MultimediaTypes, { ...rest }: any) => {
interface CardProps {
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  id: number;
}

interface LocationTypes {
  pathname: string;
}
interface PathProps {
  location: LocationTypes;
}

const Card = (item: CardProps) => {
  return <Container></Container>;
};

export default Card;
