import { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "../user";
import api from "../../services/api";

interface TalksProps {
  children: ReactNode;
}

interface Talks {
  id?: number;
  userId: number;
  destinyId: number;
  userName: string;
  destinyName: string;
  message: string;
}

interface TalksData {
  id: number;
  userId: number;
  destinyId: number;
  userName: string;
  destinyName: string;
  message: string;
}

interface TalksProviderData {
  talk: Talks[];

  totalTalks: Talks[];

  getTalks: () => void;

  getUserTalks: (talk: TalksData) => void;

  createTalks: (dataTalk: Talks) => void;

  deleteUserTalks: (id: Talks) => void;
}

const TalksContext = createContext<TalksProviderData>({} as TalksProviderData);

export const TalksProvider = ({ children }: TalksProps) => {
  const [talk, setTalk] = useState<Talks[]>([]);
  const [totalTalks, setTotalTalks] = useState<Talks[]>([]);
  const { config } = useAuth();

  const getTalks = () => {
    api
      .get("/talk", config)
      .then((response) => {
        setTotalTalks(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getUserTalks = ({ userId, destinyId }: TalksData) => {
    api
      .get(`/talk?userId=${userId}&destinyId=${destinyId}`, config)
      .then((response) => {
        setTalk(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    api
      .get(`/talk?userId=${userId}&destinyId=${destinyId}`, config)
      .then((response) => {
        setTalk([...talk, response.data]);
        console.log(response.data);
      });

    let talkOrder = talk.sort((a, b) => {
      return Number(a.id) - Number(b.id);
    });

    setTalk(talkOrder);
    console.log(talkOrder);
  };

  const createTalks = (dataTalk: Talks) => {
    api
      .post("/talk", dataTalk, config)
      .then((response) => {
        setTotalTalks([...totalTalks, response.data]);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserTalks = (id: Talks) => {
    api
      .delete(`/talks/${id}`, config)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <TalksContext.Provider
      value={{
        getTalks,
        getUserTalks,
        createTalks,
        deleteUserTalks,
        talk,
        totalTalks,
      }}
    >
      {children}
    </TalksContext.Provider>
  );
};

export const useTalks = () => useContext(TalksContext);
