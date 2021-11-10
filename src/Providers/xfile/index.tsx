import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

import api from "../../services/api";

interface XFileProviderProps {
    children: ReactNode;
}

interface XFileTypes {
    text: string;
    userId: number;
    destUserId: number;
    read?: boolean;
    id?: number;
}

interface XFileProviderData {
    createAPost: (postData: XFileTypes) => void;
    getPostsFromApi: () => void;
    getSpecificPost: (isRead: string, destUserId: number) => void;
    postUpdate: (postDat: XFileTypes) => void;
    deletePost: (id: number) => void;
    allPosts: any; 
    onePost: any;
}

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmVydG9AZW1haWwuY29tIiwiaWF0IjoxNjM2NTUzMjY0LCJleHAiOjE2MzY1NTY4NjQsInN1YiI6IjMifQ.X3Wv6VLrLkVUA7P17ZtPYB_BXw7vZ_gC8-NdAnzwVeQ";

const XFileContext = createContext<XFileProviderData>({} as XFileProviderData);

export const XFileProvider = ({ children }: XFileProviderProps) => {
    const [allPosts, setAllPosts] = useState<XFileTypes[]>({} as XFileTypes[]);
    const [onePost, setOnePost] = useState<XFileTypes[]>({} as XFileTypes[]);

    const createAPost = ({ ...postData }: XFileTypes) => {
        api.post<XFileTypes[]>(
            "/posts",
            {
                text: postData.text,
                userId: postData.userId,
                destUserId: postData.destUserId,
                read: false,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    const getPostsFromApi = () => {
        api.get<XFileTypes[]>("/posts", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setAllPosts(response.data);
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    const getSpecificPost = (isRead: string, destUserId: number) => {
        api.get<XFileTypes[]>(`/posts?destUserId=${destUserId}&read=${isRead}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setOnePost(response.data);
                console.log(response.data);
            })
            .catch((err) => console.log(err));
    };

    const postUpdate = ({ ...postData }: XFileTypes) => {
        api.patch<XFileTypes[]>(`/posts/${postData.id}`, {
            text: postData.text,
            userId: postData.userId,
            destUserId: postData.destUserId,
            read: postData.read,
        })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    const deletePost = (id: number) => {
        api.delete<XFileTypes[]>(`/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    };

    return (
        <XFileContext.Provider
            value={{
                createAPost,
                getPostsFromApi,
                getSpecificPost,
                postUpdate,
                deletePost,
                allPosts,
                onePost
            }}
        >
            {children}
        </XFileContext.Provider>
    );
};

export const useXFile = () => useContext(XFileContext);
