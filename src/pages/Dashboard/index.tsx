import Header from "../../components/Dashboard/Header";
import Transfer from "../../components/Dashboard/Transfer";
import { Container } from "./styles";
import imgDash from "../../assets/dash.png";
import History from "../../components/Dashboard/History";
import "animate.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [name, setName] = useState("");
  const token = window.localStorage.getItem("@recebaToken");

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("users/profile")
      .then((response) => {
        setName(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <Container>
      <Header />
      <div className="div-auxiliar1">
        <div>
          <p className="title-dash">Welcome back, {name}!</p>
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
