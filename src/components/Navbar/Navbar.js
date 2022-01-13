import Navs from "./Navs";
import { Brand, Header } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'
import "../../App.css";
const Navbar = ({ setDrop }) => {
  const clickHandler = () => {
    setDrop("visible")
    document.body.style.overflow = 'hidden'
  };

  return (
    <Header>
      <Brand><Link to='/' style={{ textDecoration: "none", cursor:'pointer', color:'rgb(20 184 166)' }}>Abdunazarov</Link></Brand>
      <Navs />
      <GiHamburgerMenu onClick={clickHandler} size={20} className="icon" />
    </Header>
  );
};

export default Navbar;
