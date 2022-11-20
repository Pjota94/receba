import { Container } from "./styles";

export interface ICardHistory {
  value: string;
  createdAt: string;
}

const CardHistory = ({ value, createdAt }: ICardHistory) => {
  return (
    <Container>
      <p className="value">Value: $ {value}</p>
      <p className="date">{createdAt}</p>
    </Container>
  );
};

export default CardHistory;
