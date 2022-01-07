import Contact from "./Contact";
import {NavLink} from 'react-router-domg'
import { FootContainer, FootNavsWrapper, FootNav } from "./style";

const Footer = () => {
  return (
    <FootContainer>
      <FootNavsWrapper>
        <h3>General</h3>
        <FootNav>Home</FootNav>
        <FootNav>About</FootNav>
        <FootNav>Projects</FootNav>
        <FootNav>Blog</FootNav>
      </FootNavsWrapper>
      <Contact/>
    </FootContainer>
  );
};

export default Footer;
