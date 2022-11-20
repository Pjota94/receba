import { UserContextProvider } from "../../context/Usercontext";
import { IProviderProps } from "../../interfaces/UserContext.interface";

const Providers = ({ children }: IProviderProps) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default Providers;
