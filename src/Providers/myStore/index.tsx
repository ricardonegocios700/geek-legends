import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { convertToObject } from "typescript";
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
  like: number;
  dislike: number;
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
  const { config, userId } = useAuth();

  const [myStores, setMyStores] = useState<ContextType[]>([] as ContextType[]);

  const getMyStores = () => {
    api
      .get<ContextType[]>(`/myStores?userId=${userId}`, config)
      .then((resp) => setMyStores(resp.data))
      .catch((err) => console.log(err));
  };

  const addMyStore = (item: ContextType) => {
    api
      .post<ContextType[]>("/myStores", {
        name: item.name,
        image: item.image,
        url: item.url,
        like: item.like,
        dislike: item.dislike,
        userId: item.userId,
        id: item.id
      },config)
      .then((resp) => {
        toast.success('Loja adicionada ao My Stores Geek!')
        console.log(resp.data)
        getMyStores()})
      .catch((err) => {
        toast.error('Loja já adicionada anteriormente!')
        console.log(err)});
  };

  const removeMyStore = (id: number) => {
    api
      .delete(`/myStores/${id}`, config)
      .then((resp) => getMyStores())
      .catch((err) => console.log(err, id));
  };

  useEffect(() => {
    getMyStores()
  }, [config])

  return (
    <MyStoresContext.Provider
      value={{ myStores, getMyStores, addMyStore, removeMyStore }}
    >
      {children}
    </MyStoresContext.Provider>
  );
};

export const useMyStores = () => useContext(MyStoresContext);
