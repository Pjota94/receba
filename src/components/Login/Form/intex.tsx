import { useForm } from "react-hook-form";
import { ILoginProps } from "../../../interfaces/Login.interfaces";
import Input from "../Input";
import { FormStyle } from "./styles";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>();

  return (
    <FormStyle>
      <label className="label-username">Username</label>
      <Input id="username" type="text" placeholder="Digite o seu Username" />
      <label className="label-password">Password</label>
      <Input id="password" type="password" placeholder="Digite a sua Senha" />
      <button type="submit">Sign In</button>
    </FormStyle>
  );
};

export default Form;
