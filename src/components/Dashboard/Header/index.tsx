import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransferContext } from "../../../context/TransferContext";
import { UserContext } from "../../../context/Usercontext";
import Logo from "../Logo";
import { HeaderStyled } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const { setTransactinos } = useContext(TransferContext);
  const { setUser, setLoading } = useContext(UserContext);

  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
    setTransactinos([]);
    setUser(null);
  };

  return (
    <HeaderStyled>
      <Logo />
      <button onClick={logout}>Logout</button>
    </HeaderStyled>
  );
};

export default Header;
