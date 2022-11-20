import { Dispatch, ReactNode, SetStateAction } from "react";
import { ILoginProps } from "./Login.interfaces";
import { IRegisterProps } from "./Register.interfaces";

export interface IProviderProps {
  children: ReactNode;
}

export interface IValuePropsUser {
  onRegister: (data: IRegisterProps) => void;
  onLogin: (data: ILoginProps) => void;
  user: string;
  setUser: any;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
