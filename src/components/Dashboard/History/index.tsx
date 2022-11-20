import { useContext, useEffect } from "react";
import { TransferContext } from "../../../context/TransferContext";
import api from "../../../services/api";
import CardHistory from "../CardHistory";
import { Container } from "./styles";

const History = () => {
  const {
    transactions,
    allHistory,
    cashInHistory,
    cashOutHistory,
    setTransactinos,
  } = useContext(TransferContext);

  const token = window.localStorage.getItem("@recebaToken");

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("tranfers/history")
      .then((response) => {
        setTransactinos([...response.data.credited, ...response.data.debited]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <p className="text-history">History</p>
      <div className="div-buttons">
        <button onClick={allHistory}>All</button>
        <button onClick={cashInHistory}>Cash-In</button>
        <button onClick={cashOutHistory}>Cash-Out</button>
      </div>
      <div className="div-history">
        {transactions.map((elem, index) => (
          <CardHistory
            key={index}
            value={elem.value}
            createdAt={elem.createdAt}
          />
        ))}
      </div>
    </Container>
  );
};

export default History;
