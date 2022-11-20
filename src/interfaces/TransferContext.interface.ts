import { Dispatch, SetStateAction } from "react";
import { ICardHistory } from "../components/Dashboard/CardHistory";

export interface IValuesPropsTransfer {
  transactions: ICardHistory[];
  setTransactinos: Dispatch<SetStateAction<ICardHistory[]>>;
  allHistory: () => void;
  cashInHistory: () => void;
  cashOutHistory: () => void;
  transferMoney: (data: ITransfer) => void;
  balance: string;
  setBalance: Dispatch<SetStateAction<string>>;
}

export interface ITransfer {
  username: string;
  value: number;
}
