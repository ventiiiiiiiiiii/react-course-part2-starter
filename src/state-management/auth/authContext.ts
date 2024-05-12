import React from "react";
import { AuthAction } from "./AuthProvider";

interface authContextType {
  username: string;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<authContextType>(
  {} as authContextType
);
