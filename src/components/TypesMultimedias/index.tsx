import { useEffect, useState } from "react";
import { useMultimedia } from "../../Providers/multimedia";
import { DivLikes, Like, Dislike, ImageDiv, H1, Div, Container } from "./style";
import { BsEmojiHeartEyesFill, BsEmojiFrownFill } from "react-icons/bs";
import Card from "../Card";
import { useAuth } from "../../Providers/user";
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
//import Card from "../CardMultmedia";

//({ dataToRender, ...rest }: any)

interface MultimediaTypes {
  title: string;
  type: string;
  like?: number;
  dislike?: number;
  image: string;
  description: string;
  id?: number;
  userId?: number;
}

// TODO  typeValue não é any, eu quero que seja uma string
const TypesMultimedia = ({ typeValue }: any) => {
  const { config } = useAuth();
  const {
    multimediaByFilmes,
    multimediaBySeries,
    multimediaByAnimes,
    multimediaByGames,
    multimediaByGibis,
    getMultimediaByType,
  } = useMultimedia();

  useEffect(() => {
    getMultimediaByType();
  }, [config]);

  return (
    <Container>
      {/* <Card
        url="https://www.google.com.br"
        preferences="teste"
        img="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/04/legiao_EMCh9zLXi3P_.jpg.jpeg"
        name="ONE PEACE"
        like={0}
        dislike={0}
      /> */}
      <div>
        <H1>Filmes</H1>
        {multimediaByFilmes.map((item, index) => (
          <Div key={index}>
            <ImageDiv>
              <img src={item.image} alt={item.title} />
            </ImageDiv>
            <p>{item.title}</p>
            <p>add</p>
            <DivLikes>
              <Like>
                <BsEmojiHeartEyesFill className="smile" />
                <p>{item.like}</p>
              </Like>
              <Dislike>
                <BsEmojiFrownFill className="smile" />
                <p>{item.dislike}</p>
              </Dislike>
            </DivLikes>

            {/*<Card item={item} /> TODO não passa*/}
          </Div>
        ))}
      </div>
      <div>
        <H1>Séries</H1>
        {multimediaBySeries.map((item, index) => (
          <Div key={index}>
            <ImageDiv>
              <img src={item.image} alt={item.title} />
            </ImageDiv>
            <p>{item.title}</p>
            <p>add</p>
            <DivLikes>
              <Like>
                <BsEmojiHeartEyesFill className="smile" />
                <p>{item.like}</p>
              </Like>
              <Dislike>
                <BsEmojiFrownFill className="smile" />
                <p>{item.dislike}</p>
              </Dislike>
            </DivLikes>

            {/*<Card item={item} /> TODO não passa*/}
          </Div>
        ))}
      </div>
      <div>
        <H1>Animes</H1>
        {multimediaByAnimes.map((item, index) => (
          <Div key={index}>
            <ImageDiv>
              <img src={item.image} alt={item.title} />
            </ImageDiv>
            <p>{item.title}</p>
            <p>add</p>
            <DivLikes>
              <Like>
                <BsEmojiHeartEyesFill className="smile" />
                <p>{item.like}</p>
              </Like>
              <Dislike>
                <BsEmojiFrownFill className="smile" />
                <p>{item.dislike}</p>
              </Dislike>
            </DivLikes>

            {/*<Card item={item} /> TODO não passa*/}
          </Div>
        ))}
      </div>
      <div>
        <H1>Games</H1>
        {multimediaByGames.map((item, index) => (
          <Div key={index}>
            <ImageDiv>
              <img src={item.image} alt={item.title} />
            </ImageDiv>
            <p>{item.title}</p>
            <p>add</p>
            <DivLikes>
              <Like>
                <BsEmojiHeartEyesFill className="smile" />
                <p>{item.like}</p>
              </Like>
              <Dislike>
                <BsEmojiFrownFill className="smile" />
                <p>{item.dislike}</p>
              </Dislike>
            </DivLikes>

            {/*<Card item={item} /> TODO não passa*/}
          </Div>
        ))}
      </div>
      <div>
        <H1>Gibis</H1>
        {multimediaByGibis.map((item, index) => (
          <Div key={index}>
            <ImageDiv>
              <img src={item.image} alt={item.title} />
            </ImageDiv>
            <p>{item.title}</p>
            <p>add</p>
            <DivLikes>
              <Like>
                <BsEmojiHeartEyesFill className="smile" />
                <p>{item.like}</p>
              </Like>
              <Dislike>
                <BsEmojiFrownFill className="smile" />
                <p>{item.dislike}</p>
              </Dislike>
            </DivLikes>

            {/*<Card item={item} /> TODO não passa*/}
          </Div>
        ))}
      </div>
    </Container>
  );
};

export default TypesMultimedia;
