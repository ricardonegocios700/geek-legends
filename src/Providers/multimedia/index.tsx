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
  getMultimediaByType: (type: string) => void;
  postNewMultimediaToApi: (mediaData: MultimediaTypes) => void;
  updateMultimediaInApi: (mediaData: MultimediaTypes) => void;
  deleteMultimediaFromApi: (id: number) => void;
  multimediaUserReaction: (
    mediaData: MultimediaTypes,
    reaction: number
  ) => void;
  multimediaList: MultimediaTypes[];
  multimediaByType: MultimediaTypes[];
}

const MultimediaContext = createContext<MultimediaProviderData>(
  {} as MultimediaProviderData
);

export const MultimediaProvider = ({ children }: MultimediaProviderProps) => {
  const [multimediaList, setMultimediaList] = useState<MultimediaTypes[]>(
    [] as MultimediaTypes[]
  );

  const [multimediaByType, setMultimediaByType] = useState<MultimediaTypes[]>(
    {} as MultimediaTypes[]
  );

  const { config } = useAuth();

  const getAllMultimediaFromApi = () => {
    api
      .get<MultimediaTypes[]>("/multimedias", config)
      .then((response) => {
        console.log("no provider: ", response.data);
        setMultimediaList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getMultimediaByType = (type: string) => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AZW1haWwuY29tIiwiaWF0IjoxNjM2ODUyMzg4LCJleHAiOjE2MzY4NTU5ODgsInN1YiI6IjQifQ._UvwcunFdaXfZMt-F-mHHaQs7frP1CUrnmAkwVC0Jq8";
    api
      .get<MultimediaTypes[]>(`/multimedias?type=${type}`, config)
      .then((response) => {
        setMultimediaByType(response.data);
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
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
        multimediaByType,
      }}
    >
      {children}
    </MultimediaContext.Provider>
  );
};

export const useMultimedia = () => useContext(MultimediaContext);
