import Button from "../Button";
import Form from "../Form";
import { Container } from "./styles";

const Card = () => {
  return (
    <Container>
      <p className="tittle">Register</p>
      <Form />
      <span>Já possui uma conta?</span>
      <Button />
    </Container>
  );
};

export default Card;
