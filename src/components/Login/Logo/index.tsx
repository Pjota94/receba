import { Container } from "./styles";
import nomeLogo from "../../../assets/Logo.png";
import "animate.css";

const Logo = () => {
  return (
    <Container>
      <img
        className="animate__animated animate__slideInLeft"
        src={nomeLogo}
        alt="logo"
      />
    </Container>
  );
};

export default Logo;
