import { useContext } from "react";
import { Nav, Wrapper } from "./style";
import { NavLink } from "react-router-dom";
import "../../App.css";
import AuthContext from "../../store/auth-contex";

const Navs = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Wrapper>
      <Nav>
        <NavLink
          activeclassname="active"
          style={{ textDecoration: "none", color: "gray" }}
          to="/"
        >
          Home
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none", color: "gray" }} to="/about">
          About
        </NavLink>
      </Nav>
      <Nav>
        <NavLink
          style={{ textDecoration: "none", color: "gray" }}
          to="/projects"
        >
          Projects
        </NavLink>
      </Nav>
      <Nav>
        <NavLink style={{ textDecoration: "none", color: "gray" }} to="/blog">
          Blog
        </NavLink>
      </Nav>
      {!isLoggedIn && (
        <Nav>
          <NavLink style={{ textDecoration: "none", color: "gray" }} to="/auth">
            Login
          </NavLink>
        </Nav>
      )}
      {isLoggedIn && (
        <Nav>
          <NavLink
            style={{ textDecoration: "none", color: "gray" }}
            to="/logut"
          >
            Logout
          </NavLink>
        </Nav>
      )}
    </Wrapper>
  );
};

export default Navs;
