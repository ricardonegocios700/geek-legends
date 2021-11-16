import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../../services/api";
import { useAuth } from "../user";

interface StoreProviderProps {
  children: ReactNode;
}
interface StoreType {
  name: string;
  url: string;
  image: string;
  segment: string;
  userId: number;
  like?: number;
  dislike?: number;
  id?: number;
}
interface StoreProviderDate {
  stores: StoreType[];
  getStores: () => void;
  storesBySegment: StoreType[];
  getStoreBySegment: (segment: string) => void;
  updateStoreLike: (item: StoreType) => void;
  updateStoreDeslike: (item: StoreType) => void;
}

const StoreContext = createContext<StoreProviderDate>({} as StoreProviderDate);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const { config } = useAuth();
  const [stores, setStores] = useState<StoreType[]>([] as StoreType[]);
  const [storesBySegment, setStoresBySegment] = useState<StoreType[]>(
    [] as StoreType[]
  );
  const getStores = () => {
    api
      .get<StoreType[]>("/stores", config)
      .then((resp) => setStores(resp.data))
      .catch((err) => console.log(err));
  };

  const getStoreBySegment = (segment: string) => {
    api
      .get<StoreType[]>(`/stores?segment=${segment}`, config)
      .then((resp) => setStoresBySegment(resp.data))
      .catch((err) => console.log(err));
  };

  const updateStoreLike = (item: StoreType) => {
    api.patch<StoreType>(
      `/stores/${item.id}`,
      { like: Number(item.like) + 1 },
      config
    );
  };

  const updateStoreDeslike = (item: StoreType) => {
    api.patch<StoreType>(
      `/stores/${item.id}`,
      { dislike: Number(item.like) - 1 },
      config
    );
  };

  return (
    <StoreContext.Provider
      value={{
        stores,
        getStores,
        storesBySegment,
        getStoreBySegment,
        updateStoreLike,
        updateStoreDeslike,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
