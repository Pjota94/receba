import { createContext } from "react";
import { IRegisterProps } from "../interfaces/Register.interfaces";
import {
  IProviderProps,
  IValuePropsUser,
} from "../interfaces/UserContext.interface";
import api from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ILoginProps } from "../interfaces/Login.interfaces";
import { HeadersDefaults } from "axios";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const UserContext = createContext<IValuePropsUser>(
  {} as IValuePropsUser
);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const onLogin = (data: ILoginProps) => {
    api
      .post("login", data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@recebaToken", response.data.token);
        toast.success("SIIIIIII!");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  const onRegister = (data: IRegisterProps) => {
    api
      .post("users", data)
      .then((response) => {
        toast.success("Graças a Deus Pai!");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(`${err.response.data.message}`);
      });
  };

  return (
    <UserContext.Provider value={{ onRegister, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};
