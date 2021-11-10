import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  userId: number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  preferences: string;
  aboutMe: string;
  decode?: DecodeData;
}

interface DecodeData {
  email: string;
  iat: number;
  exp: number;
  sub?: string;
}

interface AuthProviderData {
  userSignup: (userData: UserData, history: History) => void;
  userLogin: (userData: UserData, history: History) => void;
  Logout: (history: History) => void;
  userProfileUpdate: (userId: UserData, userData: UserData) => void;
  getUsers: () => void;
  userId: number;
  user: UserData;
  setUserId: any;
  authorized: boolean;
  setAuthorized: any;
  accessToken: string;
  config: {
    headers: { Authorization: string };
  };
  usersList: any;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [user, setUser] = useState({} as UserData);
  const [userId, setUserId] = useState(0);
  const [authorized, setAuthorized] = useState(false);
  const [config, setConfig] = useState({
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYXRyaXpAZW1haWwuY29tIiwiaWF0IjoxNjM2NTY4MjUyLCJleHAiOjE2MzY1NzE4NTIsInN1YiI6IjEifQ.CHwm00T0XTyqHAF4Ix1FT8Af8YEN2KETVoLkNBLR1y4",
    },
  });
  const [checkMove, setCheckMove] = useState(false);
  const [usersList, setUsersList] = useState<UserData[]>({} as UserData[]);
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  useEffect(() => {
    setConfig({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }, [accessToken]);

  const userSignup = (userData: UserData, history: History) => {
    api
      .post("/users", userData)
      .then((response) => {
        console.log("Conta criada com sucesso!");
        setUser(response.data);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(`erro ao criar`);
      });
  };

  const userLogin = (userData: UserData, history: History) => {
    api
      .post("/login", userData)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("token", JSON.stringify(access));
        setAccessToken(access);
        setAuthorized(true);
        history.push("/dashboard");
        console.log("Login efetuado com sucesso!");
      })
      .catch((err) => console.log(`Falha! Senha ou email incorreto => ${err}`));
  };

  const getUsers = () => {
    api
      .get(`/users`, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(userId));
  };

  useEffect(() => {
    const token = accessToken;
    if (token) {
      const decode: UserData = jwtDecode(token);
      setUser(decode);
      setUserId(Number(decode.decode?.sub));
      setAuthorized(true);
      setConfig({
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      getUsers();
    }
  }, [accessToken, checkMove]);

  const userProfileUpdate = (userId: UserData, userData: UserData) => {
    api
      .patch(
        `/users/${userId}/`,
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
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
        console.log(`Usuário alterado. Olá ${response.data.username}`);
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

    console.log("Logout realizado");
  };

  return (
    <AuthContext.Provider
      value={{
        userSignup,
        Logout,
        userLogin,
        userId,
        user,
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
