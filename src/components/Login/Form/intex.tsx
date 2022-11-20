import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/Usercontext";

import { ILoginProps } from "../../../interfaces/Login.interfaces";
import Input from "../Input";
import { FormStyle } from "./styles";

const Form = () => {
  const { onLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>();

  return (
    <FormStyle onSubmit={handleSubmit(onLogin)}>
      <label className="label-username">Username</label>
      <Input
        id="username"
        type="text"
        placeholder="Digite o seu Username"
        register={register}
        name="username"
      />
      <label className="label-password">Password</label>
      <Input
        id="password"
        type="password"
        placeholder="Digite a sua Senha"
        register={register}
        name="password"
      />
      <button type="submit">Sign In</button>
    </FormStyle>
  );
};

export default Form;
