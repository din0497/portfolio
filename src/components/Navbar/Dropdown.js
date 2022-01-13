import DropButton from "./DropButton";
import { DropContainer, DropUl } from "./style";

const Dropdown = ({ setDrop }) => {
  const clickHandler = () => {
    setDrop("hidden");
    document.body.style.overflow = "visible";
  };
  return (
    <DropContainer onClick={clickHandler}>
      <DropUl onClick={(e) => e.stopPropagation()}>
        <DropButton onClick={clickHandler} to="/" text="Home" />
        <DropButton onClick={clickHandler} to="/about" text="About" />
        <DropButton onClick={clickHandler} to="/projects" text="Projects" />
        <DropButton onClick={clickHandler} to="/blog" text="Blog" />
      </DropUl>
    </DropContainer>
  );
};

export default Dropdown;
