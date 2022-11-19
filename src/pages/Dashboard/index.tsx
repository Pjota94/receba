import Header from "../../components/Dashboard/Header";
import Transfer from "../../components/Dashboard/Transfer";
import { Container } from "./styles";
import imgDash from "../../assets/dash.png";
import History from "../../components/Dashboard/History";
import "animate.css";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <div className="div-auxiliar1">
        <div>
          <p className="title-dash">Welcome back, Júnior!</p>
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
  );
};

export default Dashboard;
