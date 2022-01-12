import { Link } from "react-router-dom";
import { DropLi } from "./style";
const DropButton = ({ text, to, onClick }) => {
  return (
    <DropLi onClick={onClick}>
      <Link to={to} style={{ textDecoration: "none", color:'black' }}>{text}</Link>
    </DropLi>
  );
};

export default DropButton;
