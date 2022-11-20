import { ReactNode } from "react";
import { IRegisterProps } from "./Register.interfaces";

export interface IProviderProps {
  children: ReactNode;
}

export interface IValuePropsUser {
  onRegister: (data: IRegisterProps) => void;
}
