import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useAuth } from "../user/index";

interface MultimediaProviderProps {
  children: ReactNode;
}

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

interface MultimediaProviderData {
  getAllMultimediaFromApi: () => void;
  getMultimediaByType: () => void;
  postNewMultimediaToApi: (mediaData: MultimediaTypes) => void;
  updateMultimediaInApi: (mediaData: MultimediaTypes) => void;
  deleteMultimediaFromApi: (id: number) => void;
  multimediaUserReaction: (
    mediaData: MultimediaTypes,
    reaction: number
  ) => void;
  multimediaList: MultimediaTypes[];
  multimediaByFilmes: MultimediaTypes[];
  multimediaBySeries: MultimediaTypes[];
  multimediaByAnimes: MultimediaTypes[];
  multimediaByGames: MultimediaTypes[];
  multimediaByGibis: MultimediaTypes[];
}

const MultimediaContext = createContext<MultimediaProviderData>(
  {} as MultimediaProviderData
);

export const MultimediaProvider = ({ children }: MultimediaProviderProps) => {
  const [multimediaList, setMultimediaList] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );

  const [multimediaByFilmes, setMultimediaByFilmes] = useState<
    MultimediaTypes[]
  >([] as MultimediaTypes[]);
  const [multimediaByGibis, setMultimediaByGibis] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const [multimediaByAnimes, setMultimediaByAnimes] = useState<
    MultimediaTypes[]
  >([] as MultimediaTypes[]);
  const [multimediaBySeries, setMultimediaBySeries] = useState<
    MultimediaTypes[]
  >([] as MultimediaTypes[]);
  const [multimediaByGames, setMultimediaByGames] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );
  const test = ["Gibi", "Filme"];
  const { config, accessToken } = useAuth();

  const getAllMultimediaFromApi = () => {
    //TODO não usamos config
    api
      .get<MultimediaTypes[]>("/multimedias", config)
      .then((response) => {
        console.log("Provider multimediaList", response.data);
        setMultimediaList(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
        );
      });
  };

  const getMultimediaByType = () => {
    //TODO não usamos config
    //TODO nem tentei usar uma variável para os types, não quis investir tempo

    api
      .get<MultimediaTypes[]>(`/multimedias?type=Filmes`, config)
      .then((response) => {
        setMultimediaByFilmes(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível carregar Filmes. Favor tentar novamente!"
        );
        console.log(err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Gibis`, config)
      .then((response) => {
        setMultimediaByGibis(response.data);
      })
      .catch((err) => {
        toast.error("Não foi possível carregar Gibis. Favor tentar novamente!");
        console.log(err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Animes`, config)
      .then((response) => {
        setMultimediaByAnimes(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir carregar Animes. Favor tentar novamente!"
        );
        console.log(err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Séries`, config)
      .then((response) => {
        setMultimediaBySeries(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir carregar Séries. Favor tentar novamente!"
        );
        console.log(err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Games`, config)
      .then((response) => {
        setMultimediaByGames(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir carregar Games. Favor tentar novamente!"
        );
        console.log(err);
      });
  };

  const postNewMultimediaToApi = ({ ...mediaData }: MultimediaTypes) => {
    api
      .post<MultimediaTypes[]>(
        "/multimedias",
        {
          title: mediaData.title,
          type: mediaData.type,
          image: mediaData.image,
          description: mediaData.description,
          userId: mediaData.userId,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const updateMultimediaInApi = ({ ...mediaData }: MultimediaTypes) => {
    api.patch<MultimediaTypes[]>(
      `/multimedias/${mediaData.id}`,
      {
        title: mediaData?.title,
        type: mediaData?.type,
        image: mediaData?.image,
        description: mediaData?.description,
      },
      config
    );
  };

  const deleteMultimediaFromApi = (id: number) => {
    api
      .delete(`/multimedias/${id}`)
      .then((response) => {
        toast.success("Deletado com sucesso!");
        console.log(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
        );
        console.log(err);
      });
  };

  const multimediaUserReaction = (
    { ...mediaData }: MultimediaTypes,
    reaction: number
  ) => {
    let like = 0;
    let dislike = 0;
    if (reaction > 0) {
      like = Number(mediaData.like) + 1;
    } else {
      like = Number(mediaData.like);
    }
    if (reaction < 0) {
      dislike = Number(mediaData.dislike) + 1;
    } else {
      dislike = Number(mediaData.dislike);
    }

    api
      .patch<MultimediaTypes[]>(
        `/multimedia/${mediaData.id}`,
        {
          like: like,
          dislike: dislike,
          userId: mediaData.userId,
        },
        config
      )
      .then((response) => {
        getAllMultimediaFromApi();
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Não foi possível registrar sua reação! Favor tentar novamente!"
        );
      });
  };

  return (
    <MultimediaContext.Provider
      value={{
        getAllMultimediaFromApi,
        getMultimediaByType,
        postNewMultimediaToApi,
        updateMultimediaInApi,
        deleteMultimediaFromApi,
        multimediaUserReaction,
        multimediaList,
        multimediaByFilmes,
        multimediaBySeries,
        multimediaByAnimes,
        multimediaByGames,
        multimediaByGibis,
      }}
    >
      {children}
    </MultimediaContext.Provider>
  );
};

export const useMultimedia = () => useContext(MultimediaContext);
