import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../user";

interface MessagesProviderData {
  getMessage: () => void;
  message: ContextType;
}
interface ProviderProps {
  children: ReactNode;
}
interface ContextType {
  id?: number;
  quote: string;
  translate: string;
  author: string;
}

const MessagesContext = createContext<MessagesProviderData>(
  {} as MessagesProviderData
);

export const MessagesProvider = ({ children }: ProviderProps) => {
  const { config } = useAuth();
  const [message, setMessage] = useState<ContextType>({} as ContextType);

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.ceil(Math.random() * max + min);
  };

  const getMessage = () => {
    api
      .get<ContextType[]>(`messages/`, config)
      .then((resp) => {
        const max = Number(resp.data.length);
        const random = getRandomArbitrary(0, max);
        setMessage(resp.data[random]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MessagesContext.Provider value={{ getMessage, message }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  useContext(MessagesContext);
};
