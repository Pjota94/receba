import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const Button = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    return navigate("/register", { replace: true });
  };

  return <Container onClick={handleRegister}>Sign Up</Container>;
};

export default Button;
