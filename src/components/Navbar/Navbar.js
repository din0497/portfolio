import Navs from "./Navs";
import { Brand, Header } from "./style";
import { FaHamburger } from "react-icons/fa";
import {GiHamburgerMenu, GiHamburger} from 'react-icons/gi'
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
