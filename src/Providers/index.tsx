import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { StoreProvider } from "./store/";
import { AuthProvider } from "./user";
import { XFileProvider } from "./xfile";
import { GroupProvider } from "./group";
import { MyStoresProvider } from "./myStore";
import { MessagesProvider } from "./message";

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
              <MyStoresProvider>
                <MessagesProvider>{children}</MessagesProvider>
              </MyStoresProvider>
            </GroupProvider>
          </StoreProvider>
        </XFileProvider>
      </MultimediaProvider>
    </AuthProvider>
  );
};

export default Providers;
