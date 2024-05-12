import { ReactNode, useReducer } from "react";
import { AuthContext } from "./authContext";

interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}

export type AuthAction = Login | Logout;

const authReducer = (authStatus: string, authAction: AuthAction): string => {
  if (authAction.type === "LOGIN") return authAction.username;
  if (authAction.type === "LOGOUT") return "logged out";
  return authStatus;
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
