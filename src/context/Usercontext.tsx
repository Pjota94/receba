import { createContext, useEffect, useState } from "react";
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
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const token = window.localStorage.getItem("@recebaToken");

  useEffect(() => {
    async function loadUser() {
      const token = window.localStorage.getItem("@recebaToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("users/profile");
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  });

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
    <UserContext.Provider
      value={{ onRegister, onLogin, user, setUser, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
