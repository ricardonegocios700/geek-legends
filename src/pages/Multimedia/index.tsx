import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useMultimedia } from "../../Providers/multimedia";
import Card from "../../components/CardMultmedia";
import { useStore } from "../../Providers/store";
import { boolean } from "yup/lib/locale";
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

const Multimedia = () => {
  const { multimediaList, getAllMultimediaFromApi } = useMultimedia();
  const [marker, setMarker] = useState<boolean>(false);
  const [filmes, setFilmes] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const [animes, setAnimes] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const [gibis, setGibis] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const [series, setSeries] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const [games, setGames] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );

  const fillCategories = () => {
    multimediaList.forEach((i) => {
      console.log(i.type);
      switch (i.type) {
        case "Filmes":
          setFilmes([...filmes, i]);
          break;
        case "Animes":
          setAnimes([...animes, i]);
          break;
        case "Gibis":
          setGibis([...gibis, i]);
          break;
        case "Series":
          setSeries([...series, i]);
          break;
        case "Games":
          setGames([...games, i]);
          break;
      }
    });
  };

  const clearCategories = () => {
    setFilmes([]);
    setAnimes([]);
    setGibis([]);
    setSeries([]);
    setGames([]);
  };

  useEffect(() => {
    getAllMultimediaFromApi();
    setMarker(!marker);
  }, []);

  useEffect(() => {
    clearCategories();
    fillCategories();
  }, [marker]);

  return (
    <>
      {/* <Header /> */}
      <Card />
    </>
  );
};

export default Multimedia;
