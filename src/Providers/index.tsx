import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { StoreProvider } from "./store/";
import { AuthProvider } from "./user";
import { XFileProvider } from "./xfile";
import { GroupProvider } from "./group";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <MultimediaProvider>
        <XFileProvider>
          <StoreProvider>
            <GroupProvider>{children}</GroupProvider>
          </StoreProvider>
        </XFileProvider>
      </MultimediaProvider>
    </AuthProvider>
  );
};

export default Providers;
