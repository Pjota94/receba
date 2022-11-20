import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

const Button = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    return navigate("/", { replace: true });
  };

  return <Container onClick={handleLogin}>Sign In</Container>;
};

export default Button;
