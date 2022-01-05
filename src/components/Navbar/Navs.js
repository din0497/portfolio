import { Nav, Wrapper } from "./style";
import { NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink  style={{ textDecoration: "none", color:'gray' }} to="/home">
          Home
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none", color:'gray' }} to="/about">
          About
        </NavLink>
      </Nav>
      <Nav>
        <NavLink          
          style={{ textDecoration: "none", color:'gray' }}
          to="/projects"
        >
          Projects
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none", color:'gray' }} to="/blog">
          Blog
        </NavLink>
      </Nav>
    </Wrapper>
  );
};

export default Navs;