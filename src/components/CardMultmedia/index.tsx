interface MultimediaTypes {
  title: string;
  type: string;
  like?: number;
  dislike?: number;
  image: string;
  description: string;
  id: number;
  userId?: number;
}
const Card = (item: MultimediaTypes) => {
  return <h1>Cartão de multimidia por tipo</h1>;
};

export default Card;
