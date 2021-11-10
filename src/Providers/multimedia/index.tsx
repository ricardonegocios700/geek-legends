import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import api from "../../services/api";

interface MultimediaProviderProps {
    children: ReactNode;
}

interface MultimediaTypes {
    title: string;
    type: string;
    image: string;
    description: string;
    id: number;
    userId?: number;
}

interface MultimediaProviderData {
    getAllMultimediaFromApi: () => void;
    getMultimediaByType: (type: string) => void;
    postNewMultimediaToApi: (mediaData: MultimediaTypes) => void;
    updateMultimediaInApi: (mediaData: MultimediaTypes) => void;
    deleteMultimediaFromApi: (id: number) => void;
    multimediaList: MultimediaTypes[];
    multimediaByType: MultimediaTypes[];
}

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmVydG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NTUzMjY0LCJleHAiOjE2MzY1NTY4NjQsInN1YiI6IjMifQ.X3Wv6VLrLkVUA7P17ZtPYB_BXw7vZ_gC8-NdAnzwVeQ";

const MultimediaContext = createContext<MultimediaProviderData>(
    {} as MultimediaProviderData
);

export const MultimediaProvider = ({ children }: MultimediaProviderProps) => {
    const [multimediaList, setMultimediaList] = useState<MultimediaTypes[]>(
        {} as MultimediaTypes[]
    );

    const [multimediaByType, setMultimediaByType] = useState<MultimediaTypes[]>({} as MultimediaTypes[])

    const getAllMultimediaFromApi = () => {
        api.get<MultimediaTypes[]>("/multimedias", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                setMultimediaList(response.data);
            })
            .catch((err) => console.log(err));
    };

    const getMultimediaByType = (type: string) => {
        api.get<MultimediaTypes[]>(`/multimedias?type=${type}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                setMultimediaByType(response.data)
            })
            .catch((err) => console.log(err));
    };

    const postNewMultimediaToApi = ({ ...mediaData }: MultimediaTypes) => {
        api.post<MultimediaTypes[]>(
            "/multimedias",
            {
                title: mediaData.title,
                type: mediaData.type,
                image: mediaData.image,
                description: mediaData.description,
                userId: mediaData.userId,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    const updateMultimediaInApi = ({ ...mediaData }: MultimediaTypes) => {
        api.patch<MultimediaTypes[]>(
            `/multimedias/${mediaData.id}`,
            {
                title: mediaData?.title,
                type: mediaData?.type,
                image: mediaData?.image,
                description: mediaData?.description,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    };

    const deleteMultimediaFromApi = (id: number) => {
        api.delete(`/multimedias/${id}`)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    return (
        <MultimediaContext.Provider
            value={{
                getAllMultimediaFromApi,
                getMultimediaByType,
                postNewMultimediaToApi,
                updateMultimediaInApi,
                deleteMultimediaFromApi,
                multimediaList,
                multimediaByType,
            }}
        >
            {children}
        </MultimediaContext.Provider>
    );
};

export const useMultimedia = () => useContext(MultimediaContext);
