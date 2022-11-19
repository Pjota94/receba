import Card from "../../components/Login/Card";
import Logo from "../../components/Login/Logo";
import imgLogin from "../../assets/login.png";
import { Container } from "./styles";
import "animate.css";

const Login = () => {
  return (
    <Container>
      <div>
        <Logo />
        <Card />
      </div>
      <img
        className="img-login animate__animated animate__pulse"
        src={imgLogin}
        alt=""
      />
    </Container>
  );
};

export default Login;
