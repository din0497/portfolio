import DropButton from "./DropButton";
import { DropContainer, DropUl } from "./style";
import { useContext } from "react";
import AuthContext from "../../store/auth-contex";

const Dropdown = ({ setDrop }) => {
  const authCtx = useContext(AuthContext);
  const clickHandler = () => {
    setDrop("hidden");
    document.body.style.overflow = "visible";
  };
  const logoutHandler = () => {
    authCtx.logout();
    clickHandler();
  };
  return (
    <DropContainer onClick={clickHandler}>
      <DropUl onClick={(e) => e.stopPropagation()}>
        <DropButton onClick={clickHandler} to="/" text="Home" />
        <DropButton onClick={clickHandler} to="/about" text="About" />
        <DropButton onClick={clickHandler} to="/projects" text="Projects" />
        <DropButton onClick={clickHandler} to="/blog" text="Blog" />
        {!authCtx.isLoggedIn ? (
          <DropButton onClick={clickHandler} to="/auth" text="Log in" />
        ) : (
          <button onClick={logoutHandler}>Log out</button>
        )}
      </DropUl>
    </DropContainer>
  );
};

export default Dropdown;
