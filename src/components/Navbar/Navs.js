import { Nav, Wrapper } from "./style";
import { NavLink } from "react-router-dom";

const Navs = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink  style={{ textDecoration: "none" }} to="/home">
          Home
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none" }} to="/about">
          About
        </NavLink>
      </Nav>
      <Nav>
        <NavLink          
          style={{ textDecoration: "none" }}
          to="/projects"
        >
          Projects
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none" }} to="/blog">
          Blog
        </NavLink>
      </Nav>
    </Wrapper>
  );
};

export default Navs;
