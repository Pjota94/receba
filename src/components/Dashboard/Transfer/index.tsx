import { Container } from "./styles";
import "animate.css";

const Transfer = () => {
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
        <span className="money">$ 100</span>
      </div>
    </Container>
  );
};

export default Transfer;
