import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { StoreProvider } from "./store/";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <MultimediaProvider>
      <StoreProvider>{children}</StoreProvider>
    </MultimediaProvider>
  );
};

export default Providers;
