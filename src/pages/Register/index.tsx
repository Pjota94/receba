import Logo from "../../components/Login/Logo";
import Card from "../../components/Register/Card";
import { Container } from "./styles";
import imgRegister from "../../assets/register.png";
import "animate.css";
import { UserContext } from "../../context/Usercontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Loading } from "../Dashboard/styles";

const Register = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <Loading>
        <span>Carregando...</span>
      </Loading>
    );
  }

  return user ? (
    <Navigate to="/dashboard" />
  ) : (
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
