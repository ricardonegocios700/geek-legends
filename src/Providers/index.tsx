import { ReactNode } from "react";
import { MultimediaProvider } from "./multimedia/";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return <MultimediaProvider>{children}</MultimediaProvider>;
};

export default Providers;
