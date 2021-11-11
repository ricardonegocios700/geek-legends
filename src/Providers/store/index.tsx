import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../../services/api";

interface StoreProviderProps {
  children: ReactNode;
}
interface StoreType {
  name: string;
  url: string;
  image: string;
  segment: string;
  userId: number;
  like: number;
  id: number;
}
interface StoreProviderDate {
  stores: StoreType[];
  getStores: () => void;
  storesBySegment: StoreType[];
  getStoreBySegment: (segment: string) => void;
  updateStorateLike: (item: StoreType) => void;
}

const StoreContext = createContext<StoreProviderDate>({} as StoreProviderDate);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NTk0MjAwLCJleHAiOjE2MzY1OTc4MDAsInN1YiI6IjQifQ.GHzpaTGKKAQcJbbanTUL3KTGS-D9bntB0j9ZLfiZEYo";

  const config = { headers: { Authorization: `Bearer ${accessToken}` } };
  const [stores, setStores] = useState<StoreType[]>([] as StoreType[]);
  const [storesBySegment, setStoresBySegment] = useState<StoreType[]>(
    [] as StoreType[]
  );
  const getStores = () => {
    api
      .get<StoreType[]>("stores/", config)
      .then((resp) => setStores(resp.data))
      .catch((err) => console.log(err));
  };

  const getStoreBySegment = (segment: string) => {
    api
      .get<StoreType[]>(`stores?segment=${segment}`, config)
      .then((resp) => setStoresBySegment(resp.data))
      .catch((err) => console.log(err));
  };

  const updateStorateLike = (item: StoreType) => {
    api.patch<StoreType>(
      `stores/${item.id}`,
      {
        like: item.like + 1,
      },
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
        updateStorateLike,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  useContext(StoreContext);
};
