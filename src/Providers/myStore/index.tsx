import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../user";

interface ProviderProps {
  children: ReactNode;
}
interface ContextType {
  name: string;
  url: string;
  image: string;
  segment: string;
  userId: number;
  id?: number;
}
interface MyStoresProviderDate {
  myStores: ContextType[];
  getMyStores: () => void;
}
const MyStoresContext = createContext<MyStoresProviderDate>(
  {} as MyStoresProviderDate
);

export const MyStoresProvider = ({ children }: ProviderProps) => {
  {
    /*const { config, accessToken } = useAuth();*/
  }
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NjUwMTAwLCJleHAiOjE2MzY2NTM3MDAsInN1YiI6IjQifQ.5W2Ief_S0afUu40WLeFVa8GgBPe3Yb0JpoussWRjO1Q";
  const config = { headers: { Authorization: `Bearer ${accessToken}` } };
  const [myStores, setMyStores] = useState<ContextType[]>([] as ContextType[]);

  const getMyStores = () => {
    api
      .get<ContextType[]>("myStores/", config)
      .then((resp) => setMyStores(resp.data))
      .catch((err) => console.log(err));
  };
  return (
    <MyStoresContext.Provider value={{ myStores, getMyStores }}>
      {children}
    </MyStoresContext.Provider>
  );
};

export const useMyStores = () => {
  useContext(MyStoresContext);
};
