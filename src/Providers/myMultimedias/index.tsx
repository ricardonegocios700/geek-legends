import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { useAuth } from "../user/index";
import { toast } from "react-toastify";

interface MyMultimediasProviderProps {
  children: ReactNode;
}

interface MyMultimediasTypes {
  title: string;
  type: string;
  image: string;
  description: string;
  userId: number;
  multimediaId: number;
  id: number;
}

interface MyMultimediasProviderData {
  getMyMultimediasFromApi: () => void;
  geyMyMultimediasFilter: (type: string) => void;
  addToMyMultimedias: (multimediaData: MyMultimediasTypes) => void;
  deleteMyMultimedias: (id: number) => void;
  getMyMultimediaByType: () => void;
  myMultimediaList: MyMultimediasTypes[];
  myMultimediaByFilmes: MyMultimediasTypes[];
  myMultimediaBySeries: MyMultimediasTypes[];
  myMultimediaByAnimes: MyMultimediasTypes[];
  myMultimediaByGames: MyMultimediasTypes[];
  myMultimediaByGibis: MyMultimediasTypes[];
}

const MyMultimediasContext = createContext<MyMultimediasProviderData>(
  {} as MyMultimediasProviderData
);

export const MyMultimediasProvider = ({
  children,
}: MyMultimediasProviderProps) => {
  const [myMultimediaList, setMyMultimediaList] = useState<
    MyMultimediasTypes[]
  >({} as MyMultimediasTypes[]);

  const { userId, config } = useAuth();
  const getMyMultimediasFromApi = () => {
    api
      .get<MyMultimediasTypes[]>(`/myMultimedias?userId=${userId}`, config)
      .then((response) => {
        setMyMultimediaList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const [myMultimediaByFilmes, setMyMultimediaByFilmes] = useState<
    MyMultimediasTypes[]
  >([] as MyMultimediasTypes[]);
  const [myMultimediaByGibis, setMyMultimediaByGibis] = useState<
    MyMultimediasTypes[]
  >([] as MyMultimediasTypes[]);
  const [myMultimediaByAnimes, setMyMultimediaByAnimes] = useState<
    MyMultimediasTypes[]
  >([] as MyMultimediasTypes[]);
  const [myMultimediaBySeries, setMyMultimediaBySeries] = useState<
    MyMultimediasTypes[]
  >([] as MyMultimediasTypes[]);
  const [myMultimediaByGames, setMyMultimediaByGames] = useState<
    MyMultimediasTypes[]
  >([] as MyMultimediasTypes[]);

  const getMyMultimediaByType = () => {
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=Filmes`,
        config
      )
      .then((response) => {
        setMyMultimediaByFilmes(response.data);
      })
      .catch((err) => {
        console.log("Filmes: ", err);
      });
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=Gibis`,
        config
      )
      .then((response) => {
        setMyMultimediaByGibis(response.data);
      })
      .catch((err) => {
        console.log("Gibis: ", err);
      });
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=Animes`,
        config
      )
      .then((response) => {
        setMyMultimediaByAnimes(response.data);
      })
      .catch((err) => {
        console.log("Animes: ", err);
      });
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=Séries`,
        config
      )
      .then((response) => {
        setMyMultimediaBySeries(response.data);
      })
      .catch((err) => {
        console.log("Séries: ", err);
      });
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=Games`,
        config
      )
      .then((response) => {
        setMyMultimediaByGames(response.data);
      })
      .catch((err) => {
        console.log("Games: ", err);
      });
  };

  const geyMyMultimediasFilter = (type: string) => {
    api
      .get<MyMultimediasTypes[]>(
        `/myMultimedias?userId=${userId}&type=${type}`,
        config
      )
      .then((response) => {
        getMyMultimediasFromApi();
        toast.success(`Filtrado pelo tipo  ${type}`);
      })
      .catch((err) => {
        toast.error(`Não foram encontrados favoritos do tipo ${type}`);
        console.log(err);
      });
  };

  const addToMyMultimedias = ({ ...multimediaData }: MyMultimediasTypes) => {
    let array = myMultimediaList
      .filter((item) => item.userId === userId)
      .filter((item) => item.multimediaId === multimediaData.multimediaId);

    if (array[0] === undefined) {
      api
        .post<MyMultimediasTypes>(
          "/myMultimedias",
          {
            title: multimediaData.title,
            type: multimediaData.type,
            image: multimediaData.image,
            description: multimediaData.description,
            userId: Number(userId),
            multimediaId: multimediaData.multimediaId,
          },
          config
        )
        .then((response) => {
          getMyMultimediasFromApi();
          toast.success("Favorito adicionado com sucesso!");
        })
        .catch((err) => {
          toast.error(
            "Não foi possível adicionar o favorito no momento. Favor tentar mais tarde."
          );
          console.log(err);
        });
    } else {
      toast.warn("Já é seu favorito!");
    }
  };
  const deleteMyMultimedias = (id: number) => {
    api
      .delete(`/myMultimedias/${id}`, config)
      .then((response) => {
        toast.success("Favorito removido com sucesso!");
        getMyMultimediaByType();
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
        );
        console.log(err);
      });
  };

  useEffect(() => {
    getMyMultimediasFromApi(); // eslint-disable-next-line
  }, [config]);

  return (
    <MyMultimediasContext.Provider
      value={{
        getMyMultimediasFromApi,
        geyMyMultimediasFilter,
        addToMyMultimedias,
        deleteMyMultimedias,
        myMultimediaByFilmes,
        myMultimediaBySeries,
        myMultimediaByAnimes,
        myMultimediaByGames,
        myMultimediaByGibis,
        getMyMultimediaByType,
        myMultimediaList,
      }}
    >
      {children}
    </MyMultimediasContext.Provider>
  );
};

export const useMyMultimedias = () => useContext(MyMultimediasContext);
