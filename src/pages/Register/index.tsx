import Logo from "../../components/Login/Logo";
import Card from "../../components/Register/Card";
import { Container } from "./styles";
import imgRegister from "../../assets/register.png";
import "animate.css";

const Register = () => {
  return (
    <Container>
      <div>
        <Logo />
        <Card />
      </div>
      <img
        className="img-register animate__animated animate__pulse"
        src={imgRegister}
        alt=""
      />
    </Container>
  );
};

export default Register;
