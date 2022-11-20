import { createContext } from "react";
import { IRegisterProps } from "../interfaces/Register.interfaces";
import {
  IProviderProps,
  IValuePropsUser,
} from "../interfaces/UserContext.interface";
import api from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IValuePropsUser>(
  {} as IValuePropsUser
);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const onRegister = (data: IRegisterProps) => {
    api
      .post("users", data)
      .then((response) => {
        console.log(response);
        toast.success("Graças a Deus Pai!");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(`${err.response.data.message}`);
      });
  };

  return (
    <UserContext.Provider value={{ onRegister }}>
      {children}
    </UserContext.Provider>
  );
};
