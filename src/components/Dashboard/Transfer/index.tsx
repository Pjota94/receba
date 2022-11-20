import { Container } from "./styles";
import "animate.css";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const Transfer = () => {
  const [balance, setBalance] = useState("");
  const token = window.localStorage.getItem("@recebaToken");

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;

    api
      .get("users/balance")
      .then((response) => {
        setBalance(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <Container className="animate__animated animate__zoomInDown">
      <p className="text-transfer">Transfer</p>
      <form>
        <label>Username</label>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      <div className="div-balance">
        <p className="text-balance">Total balance:</p>
        <span className="money">$ {balance}</span>
      </div>
    </Container>
  );
};

export default Transfer;
