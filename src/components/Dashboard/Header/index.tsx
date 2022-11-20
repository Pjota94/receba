import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { HeaderStyled } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <HeaderStyled>
      <Logo />
      <button onClick={logout}>Logout</button>
    </HeaderStyled>
  );
};

export default Header;
