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
  addMyStore: (item: ContextType) => void;
  removeMyStore: (id: number) => void;
}
const MyStoresContext = createContext<MyStoresProviderDate>(
  {} as MyStoresProviderDate
);

export const MyStoresProvider = ({ children }: ProviderProps) => {
  const { config } = useAuth();

  const [myStores, setMyStores] = useState<ContextType[]>([] as ContextType[]);

  const getMyStores = () => {
    api
      .get<ContextType[]>("myStores/", config)
      .then((resp) => setMyStores(resp.data))
      .catch((err) => console.log(err));
  };

  const addMyStore = (item: ContextType) => {
    api
      .post<ContextType[]>("myStores/", config)
      .then((resp) => getMyStores())
      .catch((err) => console.log(err));
  };

  const removeMyStore = (id: number) => {
    api
      .delete(`myStores/${id}`, config)
      .then((resp) => getMyStores())
      .catch((err) => console.log(err));
  };

  return (
    <MyStoresContext.Provider
      value={{ myStores, getMyStores, addMyStore, removeMyStore }}
    >
      {children}
    </MyStoresContext.Provider>
  );
};

export const useMyStores = () => {
  useContext(MyStoresContext);
};
