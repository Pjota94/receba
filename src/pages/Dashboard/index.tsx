import Header from "../../components/Dashboard/Header";
import Transfer from "../../components/Dashboard/Transfer";
import { Container, Loading } from "./styles";
import imgDash from "../../assets/dash.png";
import History from "../../components/Dashboard/History";
import "animate.css";
import { useContext } from "react";
import { UserContext } from "../../context/Usercontext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <Loading>
        <span>Carregando...</span>
      </Loading>
    );
  }

  return user ? (
    <Container>
      <Header />
      <div className="div-auxiliar1">
        <div>
          <p className="title-dash">Welcome back, {user}!</p>
          <Transfer />
        </div>
        <img
          className="img-dash animate__animated animate__fadeIn"
          src={imgDash}
          alt=""
        />
        <History />
      </div>
    </Container>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
