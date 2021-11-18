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
  name: string;
  preferences: string;
  userId: number;
  id: number;
}

interface MyPersonasProviderData {
  myPersonas: UsersType[];
  setMyPersonas: any;
  getMyPersonas: () => void;
  addMyPersonas: (item: UsersType) => void;
  removeMyPersonas: (id: number) => void;
}
const MyPersonasContext = createContext<MyPersonasProviderData>(
  {} as MyPersonasProviderData
);

export const MyPersonasProvider = ({ children }: ProviderProps) => {
  const { config, userId } = useAuth();

  const [myPersonas, setMyPersonas] = useState<UsersType[]>([]);

  const getMyPersonas = () => {
    api
      .get<UsersType[]>(`/myPersonas`, config)
      .then((resp) => {
        setMyPersonas(resp.data);
      })
      .catch((err) => console.log(err));
  };

  const addMyPersonas = (item: UsersType) => {
    api
      .post<UsersType[]>(
        "/myPersonas",
        {
          name: item.name,
          preferences: item.preferences,
          id: item.id,
          userId: userId,
        },
        config
      )
      .then((resp) => {
        toast.success("Persona adicionada a sua guilda");        
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
      value={{
        myPersonas,
        setMyPersonas,
        getMyPersonas,
        addMyPersonas,
        removeMyPersonas,
      }}
    >
      {children}
    </MyPersonasContext.Provider>
  );
};

export const usePersonas = () => useContext(MyPersonasContext);
