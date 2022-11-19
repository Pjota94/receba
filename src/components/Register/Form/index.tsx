import Input from "../../Login/Input";
import { FormStyle } from "./styles";

const Form = () => {
  return (
    <FormStyle>
      <label className="label-username">Username</label>
      <Input id="username" type="text" placeholder="Digite o seu Username" />
      <label className="label-password">Password</label>
      <Input id="password" type="password" placeholder="Digite a sua Senha" />
      <button type="submit">Sign Up</button>
    </FormStyle>
  );
};

export default Form;
