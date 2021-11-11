import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import api from "../../services/api";
import { useAuth } from "../user/index";

interface MyMultimediasProviderProps {
    children: ReactNode;
}

interface MyMultimediasTypes {
    title: string;
    type: string;
    image: string;
    description: string;
    userId: number;      
}

interface MyMultimediasProviderData {
    getMyMultimediasFromApi: () => void;
    geyMyMultimediasFilter: (type: string) => void;
    addToMyMultimedias: (multimediaData: MyMultimediasTypes) => void;
    deleteMyMultimedias: (id: number) => void;
    myMultimediaList: MyMultimediasTypes[];
}

const MyMultimediasContext = createContext<MyMultimediasProviderData>(
    {} as MyMultimediasProviderData
);

export const MyMultimediaProvider = ({
    children,
}: MyMultimediasProviderProps) => {
    const [myMultimediaList, setMyMultimediaList] = useState<
        MyMultimediasTypes[]
    >({} as MyMultimediasTypes[]);   

    const { userId, config } = useAuth();

    const getMyMultimediasFromApi = () => {
        api.get<MyMultimediasTypes[]>(`/myMultimedias?userId=${userId}`, config)
            .then((response) => {
                setMyMultimediaList(response.data);
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    const geyMyMultimediasFilter = (type: string) => {
        api.get<MyMultimediasTypes[]>(
            `/myMultimedias?userId=${userId}&type=${type}`,
            config
        )
            .then((response) => {
                getMyMultimediasFromApi();
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    const addToMyMultimedias = ({ ...multimediaData }: MyMultimediasTypes) => {
        api.post<MyMultimediasTypes[]>(
            "/myMultimedias",
            {
                title: multimediaData.title,
                type: multimediaData.type,                
                image: multimediaData.image,
                description: multimediaData.description,
                userId: multimediaData.userId,                
            },
            config
        )
            .then((response) => getMyMultimediasFromApi())
            .catch((err) => console.log(err));
    };

    const deleteMyMultimedias = (id: number) => {
        api.delete(`/myMultimedias/${id}`)
            .then((response) => getMyMultimediasFromApi())
            .catch((err) => console.log(err));
    };

    return (
        <MyMultimediasContext.Provider
            value={{
                getMyMultimediasFromApi,
                geyMyMultimediasFilter,
                addToMyMultimedias,
                deleteMyMultimedias,
                myMultimediaList,
            }}
        >
            {children}
        </MyMultimediasContext.Provider>
    );
};

export const useMyMultimedias = () => useContext(MyMultimediasContext);
