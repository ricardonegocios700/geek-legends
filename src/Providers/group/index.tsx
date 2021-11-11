import { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "../user";
import api from "../../services/api";

interface GroupProps {
  children: ReactNode;
}

interface Group {
  id: number;
  email: string;
  userId: number;
}

interface GroupProviderData {
  group: Group[];

  getUsersGroups: () => void;

  addUserGroup: (group: Group) => void;

  deleteUserGroup: (userDeleteGroup: Group) => void;
}

const GroupContext = createContext<GroupProviderData>({} as GroupProviderData);

export const GroupProvider = ({ children }: GroupProps) => {
  const [group, setGroup] = useState<Group[]>([]);
  const { config } = useAuth();

  const getUsersGroups = () => {
    api
      .get("/group", config)
      .then((response) => {
        setGroup(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addUserGroup = (groupUser: Group) => {
    api
      .post("/group", groupUser, config)
      .then((response) => {
        setGroup([...group, response.data]);
        console.log(response.data);
      })
      .catch((err) => console.log(`Falha! Senha ou email incorreto => ${err}`));
  };

  const deleteUserGroup = (id: Group) => {
    api
      .delete(`/group/${id}`, config)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <GroupContext.Provider
      value={{ group, getUsersGroups, addUserGroup, deleteUserGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
