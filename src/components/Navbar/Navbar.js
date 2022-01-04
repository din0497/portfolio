import Navs from "./Navs";
import img from "../../assets/brand.png";
import { Brand, Header } from "./style";

const Navbar = () => {
  return (
    <header>
      <Header>
        <Brand>Abdunazarov</Brand>
        <Navs />
      </Header>
    </header>
  );
};

export default Navbar;
