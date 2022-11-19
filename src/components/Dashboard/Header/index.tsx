import Logo from "../Logo";
import { HeaderStyled } from "./styles";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <button>Logout</button>
    </HeaderStyled>
  );
};

export default Header;
