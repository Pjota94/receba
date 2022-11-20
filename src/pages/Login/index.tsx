import Card from "../../components/Login/Card";
import Logo from "../../components/Login/Logo";
import imgLogin from "../../assets/login.png";
import { Container } from "./styles";
import "animate.css";
import { useContext } from "react";
import { UserContext } from "../../context/Usercontext";
import { Navigate } from "react-router-dom";
import { Loading } from "../Dashboard/styles";

const Login = () => {
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
    <>
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
    </>
  );
};

export default Login;
