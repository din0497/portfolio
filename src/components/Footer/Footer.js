import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import { FootContainer, FootNavsWrapper, FootNav } from "./style";

const Footer = () => {
  return (
    <FootContainer>
      <FootNavsWrapper>
        <h3>General</h3>
        <FootNav>
          <NavLink style={{ textDecoration: "none", color: "gray" }} to="/home">
            Home
          </NavLink>
        </FootNav>
        <FootNav>
          <NavLink
            style={{ textDecoration: "none", color: "gray" }}
            to="/about"
          >
            About
          </NavLink>
        </FootNav>
        <FootNav>
          <NavLink
            style={{ textDecoration: "none", color: "gray" }}
            to="/projects"
          >
            Projects
          </NavLink>
        </FootNav>
        <FootNav>
          <NavLink style={{ textDecoration: "none", color: "gray" }} to="/blog">
            Blog
          </NavLink>
        </FootNav>
      </FootNavsWrapper>
      <Contact />
    </FootContainer>
  );
};

export default Footer;
