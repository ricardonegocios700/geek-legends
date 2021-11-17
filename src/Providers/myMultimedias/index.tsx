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
  myMultimediaList: MyMultimediasTypes[];
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
  console.log("userId", userId);
  const getMyMultimediasFromApi = () => {
    api
      .get<MyMultimediasTypes[]>(`/myMultimedias?userId=${userId}`, config)
      .then((response) => {
        setMyMultimediaList(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
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
        console.log(response.data);
      })
      .catch((err) => {
        toast.error(`Não foram encontrados favoritos do tipo ${type}`);
        console.log(err);
      });
  };

  const addToMyMultimedias = ({ ...multimediaData }: MyMultimediasTypes) => {
    console.log(multimediaData);
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
          "Nãofoi possível adicionar o favorito no momento. Favor tentar mais tarde."
        );
        console.log(err);
      });
  };
  const deleteMyMultimedias = (id: number) => {
    api
      .delete(`/myMultimedias/${id}`)
      .then((response) => {
        toast.success("Favorito deletado com sucesso!");
        getMyMultimediasFromApi();
      })
      .catch((err) => {
        toast.error(
          "Não foi possível concluir sua solicitação. Favor tentar novamente!"
        );
        console.log(err);
      });
  };

  return (
    <MyMultimediasContext.Provider
      value={{
        getMyMultimediasFromApi,
        geyMyMultimediasFilter,
        addToMyMultimedias,
        deleteMyMultimedias,
        myMultimediaList,
      }}
    >
      {children}
    </MyMultimediasContext.Provider>
  );
};

export const useMyMultimedias = () => useContext(MyMultimediasContext);
