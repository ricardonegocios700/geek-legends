import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";
import { AuthProvider } from "./user";
import { XFileProvider } from "./xfile";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
            <MultimediaProvider>
                <XFileProvider>{children}</XFileProvider>
            </MultimediaProvider>
        </AuthProvider>
    );
};

export default Providers;
