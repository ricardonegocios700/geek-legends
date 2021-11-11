import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { StoreProvider } from "./store/";
import { AuthProvider } from "./user";
import { XFileProvider } from "./xfile";
import { GroupProvider } from "./group";
import { MyStoresProvider } from "./myStore";
import { TalksProvider } from "./talk";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <MultimediaProvider>
        <XFileProvider>
          <StoreProvider>
            <GroupProvider>
              <TalksProvider>
                <MyStoresProvider>{children}</MyStoresProvider>
              </TalksProvider>
            </GroupProvider>
          </StoreProvider>
        </XFileProvider>
      </MultimediaProvider>
    </AuthProvider>
  );
};

export default Providers;
