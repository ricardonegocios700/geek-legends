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
}
interface StoreProviderDate {
  stores: StoreType[];
  getStore: () => void;
}

const StoreContext = createContext<StoreProviderDate>({} as StoreProviderDate);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NTc3OTc1LCJleHAiOjE2MzY1ODE1NzUsInN1YiI6IjQifQ._9oBlyU1bnbpAUvTDdS0PDxiwvjoW1Mpf7I0CwP2r4I";

  const config = { headers: { Authorization: `Bearer ${accessToken}` } };
  const [stores, setStores] = useState<StoreType[]>([] as StoreType[]);
  const getStore = () => {
    api
      .get<StoreType[]>("stores/", config)
      .then((resp) => setStores(resp.data))
      .catch((err) => console.log(err));
  };
  return (
    <StoreContext.Provider value={{ stores, getStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  useContext(StoreContext);
};
