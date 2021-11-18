import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useAuth } from "../user/index";

interface MultimediaProviderProps {
  children: ReactNode;
}

interface MultimediaTypes {
  id: number;
  title: string;
  type: string;
  like: number;
  dislike: number;
  image: string;
  description: string;
  userId: number;
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

  const { config } = useAuth();

  const getAllMultimediaFromApi = () => {
    api
      .get<MultimediaTypes[]>("/multimedias", config)
      .then((response) => {
        setMultimediaList(response.data);
      })
      .catch((err) => {
        console.log(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
        );
      });
  };

  const getMultimediaByType = () => {
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Filmes`, config)
      .then((response) => {
        setMultimediaByFilmes(response.data);
      })
      .catch((err) => {
        console.log("Filmes: ", err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Gibis`, config)
      .then((response) => {
        setMultimediaByGibis(response.data);
      })
      .catch((err) => {
        console.log("Gibis: ", err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Animes`, config)
      .then((response) => {
        setMultimediaByAnimes(response.data);
      })
      .catch((err) => {
        console.log("Animes: ", err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Séries`, config)
      .then((response) => {
        setMultimediaBySeries(response.data);
      })
      .catch((err) => {
        console.log("Séries: ", err);
      });
    api
      .get<MultimediaTypes[]>(`/multimedias?type=Games`, config)
      .then((response) => {
        setMultimediaByGames(response.data);
      })
      .catch((err) => {
        console.log("Games: ", err);
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
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const updateMultimediaInApi = ({ ...mediaData }: MultimediaTypes) => {
    api.patch<MultimediaTypes>(
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
      .patch<MultimediaTypes>(
        `/multimedias/${mediaData.id}`,
        {
          like: Number(like),
          dislike: Number(dislike),
        },
        config
      )
      .then((response) => {
        getMultimediaByType();
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
