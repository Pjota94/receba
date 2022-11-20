import { IRegisterProps } from "../../../interfaces/Register.interfaces";
import { Container } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface IInputLoginProps {
  id: string;
  type: string;
  placeholder: string;
  name: "username" | "password";
  register: UseFormRegister<IRegisterProps>;
}

const Input = ({ id, type, placeholder, name, register }: IInputLoginProps) => {
  return (
    <Container>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name)}
      />
    </Container>
  );
};

export default Input;
