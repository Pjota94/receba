import { Container } from "./styles";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { useForm } from "react-hook-form";
import { ITransfer, TransferContext } from "../../../context/TransferContext";

const Transfer = () => {
  const { transferMoney, balance, setBalance } = useContext(TransferContext);
  // const [balance, setBalance] = useState("");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITransfer>();

  return (
    <Container className="animate__animated animate__zoomInDown">
      <p className="text-transfer">Transfer</p>
      <form onSubmit={handleSubmit(transferMoney)}>
        <label>Username</label>
        <input type="text" {...register("username")} />
        <label>Value</label>
        <input type="number" {...register("value")} />
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
