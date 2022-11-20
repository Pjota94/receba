import Input from "../../Login/Input";
import { FormStyle } from "./styles";
import { useForm } from "react-hook-form";
import { IRegisterProps } from "../../../interfaces/Register.interfaces";
import { useContext } from "react";
import { UserContext } from "../../../context/Usercontext";

const Form = () => {
  const { onRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>();

  return (
    <FormStyle onSubmit={handleSubmit(onRegister)}>
      <label className="label-username">Username</label>
      <Input
        id="username"
        type="text"
        placeholder="Digite o seu Username"
        register={register}
        name={"username"}
      />
      <label className="label-password">Password</label>
      <Input
        id="password"
        type="password"
        placeholder="Digite a sua Senha"
        register={register}
        name={"password"}
      />
      <button type="submit">Sign Up</button>
    </FormStyle>
  );
};

export default Form;
