import { createContext } from "react";
import { IProviderProps } from "../interfaces/UserContext.interface";

export const AuthContext = createContext({});

const UserContext = ({ children }: IProviderProps) => {};

export default UserContext;
