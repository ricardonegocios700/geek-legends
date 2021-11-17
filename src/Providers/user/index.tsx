import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { History } from "history";
import api from "../../services/api";

interface AuthProps {
  children: ReactNode;
}
interface UserLoginData {
  email: string;
  password: string;
}

interface UserData {
  userId?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  preferences: string;
  aboutMe: string;
  decode?: DecodeData;
}

interface DecodeData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface HeadersTypes {
  Authorization: string;
}
interface RequestConfigTypes {
  headers: HeadersTypes;
}

interface AuthProviderData {
  userSignup: (userData: UserData) => void;
  userLogin: (userData: UserLoginData) => void;
  Logout: (history: History) => void;
  userProfileUpdate: (userId: UserData, userData: UserData) => void;
  getUsers: () => void;
  getOneUser: (userId: UserData) => void;
  userId: any;
  user: UserData;
  userInfo: UserData;
  setUser: any;
  setUserId: any;
  authorized: boolean;
  setAuthorized: any;
  accessToken: string;
  config: RequestConfigTypes;
  usersList: any;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [user, setUser] = useState<UserData>({} as UserData);
  const [userInfo, setUserInfo] = useState<UserData>({} as UserData);
  const [usersList, setUsersList] = useState<UserData[]>([] as UserData[]);

  const [userId, setUserId] = useState<Number>(0);

  const [authorized, setAuthorized] = useState<boolean>(false);
  const [checkMove, setCheckMove] = useState<boolean>(false);

  const [config, setConfig] = useState<RequestConfigTypes>(
    {} as RequestConfigTypes
  );

  const [accessToken, setAccessToken] = useState<string>(
    () => localStorage.getItem("@geekLegends:access") || ""
  );

  const userSignup = (userData: UserData) => {
    api
      .post("/users", userData)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        setUser(response.data);
        history.push("/login");
      })
      .catch((err) => {
        toast.error(`erro ao criar`);
      });
  };

  const userLogin = (userData: UserLoginData) => {
    api
      .post("/login", userData)
      .then((response) => {
        const { accessToken } = response.data;
        localStorage.setItem("@geekLegends:access", accessToken);
        setAccessToken(accessToken);
        setAuthorized(true);
        toast.success("Login efetuado com sucesso!");
        history.push("/dashboard");
      })
      .catch((err) => toast.error(`Falha! Senha ou email incorreto => ${err}`));
  };

  const getUsers = () => {
    api
      .get(`/users`, config)
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getOneUser = () => {
    api
      .get(`users?id=${userId}`, config)
      .then((response) => {
        setUserInfo(response.data[0]);
      })
      .catch((err) => console.log(err));
  };

  const userProfileUpdate = (userId: UserData, userData: UserData) => {
    api
      .patch(
        `/users/${userId}/`,
        {
          name: userData.name,
          // email: userData.email,
          // password: userData.password,
          preferences: userData.preferences,
          aboutMe: userData.aboutMe,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        setCheckMove(!checkMove);
        toast.success(`Usuário alterado. Olá ${response.data.username}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("Nome inválido");
      });
  };

  const Logout = (history: History) => {
    localStorage.clear();

    setAccessToken("");

    history.push("/login");

    toast.success("Logout realizado");
  };

  useEffect(() => {
    const token = accessToken;
    if (token) {
      const decode: DecodeData = jwtDecode(token);
      let num = Number(decode.sub);
      setUserId(num);
      setAuthorized(true);
    }
    setConfig({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }, [accessToken, checkMove]);

  useEffect(() => {
    getUsers();
  }, [config]);

  return (
    <AuthContext.Provider
      value={{
        userSignup,
        Logout,
        userLogin,
        getOneUser,
        userId,
        user,
        userInfo,
        setUser,
        setUserId,
        usersList,
        userProfileUpdate,
        authorized,
        setAuthorized,
        accessToken,
        config,
        getUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
