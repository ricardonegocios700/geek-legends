import { createContext, useContext } from "react";

interface ContextType {
  name: string;
  url: string;
  image: string;
  segment: string;
  userId: number;
  id?: number;
}
const MyStoresContext = createContext<ContextType>({} as ContextType);

export const useMyStores = () => {
  useContext(MyStoresContext);
};
