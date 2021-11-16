import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuth } from "../user";

interface ProviderProps {
  children: ReactNode;
}
interface UsersType {
  email: string;
  confirmPassword: string;
  name: string;
  aboutMe: string;
  preferences: string;
  userId: number;
  id?: number;
}

interface MyPersonasProviderData {
  myPersonas: UsersType[];
  getMyPersonas: () => void;
  addMyPersonas: (item: UsersType) => void;
  removeMyPersonas: (id: number) => void;
}
const MyPersonasContext = createContext<MyPersonasProviderData>(
  {} as MyPersonasProviderData
);

export const MyPersonasProvider = ({ children }: ProviderProps) => {
  const { config, userId } = useAuth();

  const [myPersonas, setMyPersonas] = useState<UsersType[]>([] as UsersType[]);

  const getMyPersonas = () => {
    api
      .get<UsersType[]>(`/myPersonas?userId=${userId}`, config)
      .then((resp) => setMyPersonas(resp.data))
      .catch((err) => console.log(err));
  };

  const addMyPersonas = (item: UsersType) => {
    api
      .post<UsersType[]>(
        "/myPersonas",
        {
          email: item.email,
          confirmPassword: item.confirmPassword,
          name: item.name,
          aboutMe: item.aboutMe,
          preferences: item.preferences,
          userId: item.userId,
        },
        config
      )
      .then((resp) => {
        toast.success("Persona adicionada a sua guilda");
        console.log(resp.data);
        getMyPersonas();
      })
      .catch((err) => {
        toast.error("Ei! Já estou contigo");
        console.log(err);
      });
  };

  const removeMyPersonas = (id: number) => {
    api
      .delete(`/myPersonas/${id}`, config)
      .then((resp) => {
        toast.success("Persona levou um fora");
        getMyPersonas();
      })
      .catch((err) => console.log(err, id));
  };

  useEffect(() => {
    getMyPersonas();
  }, [config]);

  return (
    <MyPersonasContext.Provider
      value={{ myPersonas, getMyPersonas, addMyPersonas, removeMyPersonas }}
    >
      {children}
    </MyPersonasContext.Provider>
  );
};

export const usePersonas = () => useContext(MyPersonasContext);
