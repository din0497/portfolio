import Navs from "./Navs";
import img from "../../assets/brand.png";
import { Brand, Header } from "./style";

const Navbar = () => {
  return (
    <Header>
      <Brand>Abdunazarov</Brand>
      <Navs />
    </Header>
  );
};

export default Navbar;
