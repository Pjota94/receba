import { Container } from "./styles";

interface IInputLoginProps {
  id: string;
  type: string;
  placeholder: string;
}

const Input = ({ id, type, placeholder }: IInputLoginProps) => {
  return (
    <Container>
      <input type={type} id={id} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
