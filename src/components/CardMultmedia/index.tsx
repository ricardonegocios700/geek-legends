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
const Card = (item: MultimediaTypes, { ...rest }: any) => {
  return <h1 {...rest}>{item.title}</h1>;
};

export default Card;
