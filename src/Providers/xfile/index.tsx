import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../user";

import api from "../../services/api";
import { toast } from "react-toastify";

interface XFileProviderProps {
  children: ReactNode;
}

interface XFileTypes {
  title: string;
  text: string;
  userId: number;
  id?: number;
  date: string;
}

interface XFileProviderData {
  createAPost: (postData: XFileTypes) => void;
  getPostsFromApi: () => void;
  getSpecificPost: (isRead: string, destUserId: number) => void;
  postUpdate: (postDat: XFileTypes) => void;
  deletePost: (id: number) => void;
  allPosts: XFileTypes[];
}

const XFileContext = createContext<XFileProviderData>({} as XFileProviderData);

export const XFileProvider = ({ children }: XFileProviderProps) => {
  const [allPosts, setAllPosts] = useState<XFileTypes[]>({} as XFileTypes[]);

  const { config, userId } = useAuth();

  const getPostsFromApi = () => {
    api
      .get<XFileTypes[]>(`/posts?userId=${userId}`, config)
      .then((response) => {
        setAllPosts(response.data);        
      })
      .catch((err) => {
        console.log("Erro: " + err);
      });
  };

  const createAPost = ({ ...postData }: XFileTypes) => {
    api
      .post<XFileTypes[]>(
        "/posts",
        {
          title: postData.title,
          text: postData.text,
          userId: postData.userId,
          date: postData.date,
        },
        config
      )
      .then((response) => getPostsFromApi())
      .catch((err) => console.log(err));
  };

  const getSpecificPost = (title: string) => {
    api
      .get<XFileTypes[]>(`/posts?title=${title}`, config)
      .then((response) => {
        getPostsFromApi();
      })
      .catch((err) => {
        toast.error("X-File não encontrado! Favor tentar novamente!");
        console.log(err);
      });
  };

  const postUpdate = ({ ...postData }: XFileTypes) => {
    api
      .patch<XFileTypes[]>(`/posts/${postData.id}`, {
        title: postData.title,
        text: postData.text,
        userId: postData.userId,
        date: postData.date,
      })
      .then((response) => {
        getPostsFromApi();
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id: number) => {
    api
      .delete<XFileTypes[]>(`/posts/${id}`, config)
      .then((response) => {
        getPostsFromApi();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPostsFromApi(); // eslint-disable-next-line
  }, [config]);

  return (
    <XFileContext.Provider
      value={{
        createAPost,
        getPostsFromApi,
        getSpecificPost,
        postUpdate,
        deletePost,
        allPosts,
      }}
    >
      {children}
    </XFileContext.Provider>
  );
};

export const useXFile = () => useContext(XFileContext);
