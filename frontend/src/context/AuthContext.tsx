import {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

type ClientStateProps = {
  token: string;
  infos: UserProps;
} | null;

type AuthContextProps = {
  client: ClientStateProps | null;
  setClient: React.Dispatch<React.SetStateAction<ClientStateProps | null>>;
};

// create context
const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState({} as ClientStateProps);

  useEffect(() => {
    setClient({
      token: "lorem ipsem is refrehs token no is access token",
      infos: {
        _id: "1",
        username: "Jain Doe",
        description: "You can call me average.",
        email: "jain@mail.com",
        picture: "/avatars/avatar.jpg",
        profileStatus: "all",
        connected: true,
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ client, setClient }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;