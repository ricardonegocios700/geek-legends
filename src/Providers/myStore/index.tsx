import { createContext, ReactNode, useContext } from "react";
interface MyStoresProviderProps {
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
const MyStoresContext = createContext<ContextType>({} as ContextType);

export const MyStoresProvider = ({ children }: MyStoresProviderProps) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2FyZG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NjQ0MjY4LCJleHAiOjE2MzY2NDc4NjgsInN1YiI6IjQifQ.pikUOwuiB19zj5ayacJ4AQDEiv00RoRGOKIvAESYTgA";

  return (
    <MyStoresContext.Provider value={{}}>{children}</MyStoresContext.Provider>
  );
};

export const useMyStores = () => {
  useContext(MyStoresContext);
};
