import { createContext, useState } from "react";
import { ICardHistory } from "../components/Dashboard/CardHistory";
import { IProviderProps } from "../interfaces/UserContext.interface";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  ITransfer,
  IValuesPropsTransfer,
} from "../interfaces/TransferContext.interface";

// export interface IValuesPropsTransfer {
//   transactions: ICardHistory[];
//   setTransactinos: Dispatch<SetStateAction<ICardHistory[]>>;
//   allHistory: () => void;
//   cashInHistory: () => void;
//   cashOutHistory: () => void;
//   transferMoney: (data: ITransfer) => void;
//   balance: string;
//   setBalance: Dispatch<SetStateAction<string>>;
// }

// export interface ITransfer {
//   username: string;
//   value: number;
// }

export const TransferContext = createContext<IValuesPropsTransfer>(
  {} as IValuesPropsTransfer
);

const TransferContextProvider = ({ children }: IProviderProps) => {
  const [transactions, setTransactinos] = useState<ICardHistory[]>([]);
  const [balance, setBalance] = useState("");
  const token = window.localStorage.getItem("@recebaToken");

  const allHistory = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("tranfers/history")
      .then((response) => {
        setTransactinos([...response.data.credited, ...response.data.debited]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cashInHistory = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("tranfers/cashIn")
      .then((response) => {
        setTransactinos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cashOutHistory = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("tranfers/cashOut")
      .then((response) => {
        setTransactinos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const transferMoney = (data: ITransfer) => {
    const { username, value } = data;
    const numberValue = Number(value);
    const objValue = { value: numberValue };
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post(`tranfers/${username}`, objValue)
      .then((response) => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api
          .get("users/balance")
          .then((response) => {
            setBalance(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
        toast.success("Receba!");
        allHistory();
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  };

  return (
    <TransferContext.Provider
      value={{
        allHistory,
        transactions,
        cashInHistory,
        cashOutHistory,
        setTransactinos,
        transferMoney,
        balance,
        setBalance,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export default TransferContextProvider;
