import { createContext, useContext } from "react";

interface MessagesProviderDate {
  id?: number;
  quote: string;
  translate: string;
  author: string;
}

const MessagesContext = createContext<MessagesProviderDate>(
  {} as MessagesProviderDate
);

export const useMessages = () => {
  useContext(MessagesContext);
};
