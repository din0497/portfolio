import Navs from "./Navs";
import { Brand, Header } from "./style";
import {GiHamburgerMenu} from 'react-icons/gi'
import  '../../App.css'
const Navbar = () => {
  return (
    <Header>
      <Brand>Abdunazarov</Brand>
      <Navs />
     <GiHamburgerMenu size={20} className="icon"/>
    </Header>
  );
};

export default Navbar;
