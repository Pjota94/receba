import TransferContextProvider from "../../context/TransferContext";
import { UserContextProvider } from "../../context/Usercontext";
import { IProviderProps } from "../../interfaces/UserContext.interface";

const Providers = ({ children }: IProviderProps) => {
  return (
    <>
      <UserContextProvider>
        <TransferContextProvider>{children}</TransferContextProvider>
      </UserContextProvider>
    </>
  );
};

export default Providers;
