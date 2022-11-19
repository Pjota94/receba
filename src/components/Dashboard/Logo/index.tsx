import { Container } from "./styles";
import logoHeader from "../../../assets/logoDash.png";
import "animate.css";

const Logo = () => {
  return (
    <Container>
      <img
        className="animate__animated animate__slideInLeft"
        src={logoHeader}
        alt="logo"
      />
    </Container>
  );
};

export default Logo;
