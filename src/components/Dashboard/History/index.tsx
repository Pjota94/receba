import CardHistory from "../CardHistory";
import { Container } from "./styles";

const History = () => {
  return (
    <Container>
      <p className="text-history">History</p>
      <div className="div-buttons">
        <button>All</button>
        <button>Cash-In</button>
        <button>Cash-Out</button>
      </div>
      <div className="div-history">
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
      </div>
    </Container>
  );
};

export default History;
