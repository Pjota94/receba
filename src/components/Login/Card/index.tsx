import Button from "../Button";
import Form from "../Form/intex";
import { Container } from "./styles";

const Card = () => {
  return (
    <Container>
      <p className="tittle">Login</p>
      <Form />
      <span>Ainda não possui uma conta?</span>
      <Button />
    </Container>
  );
};

export default Card;
