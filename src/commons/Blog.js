import { BlogCart, Img, Title } from "./style";
import { Link } from "react-router-dom";
const Blog = ({ img, title, date, id }) => {
  console.log();
  return (
    <BlogCart>
      <Img src={img} loading="lazy" />
      <div>
        <Title>{title}</Title>
        <span style={{ marginLeft: "5px", color: "grey" }}>{date}</span>
      </div>
      <Link to={`/blog/${id}`}>read more</Link>
    </BlogCart>
  );
};

export default Blog;
// GiHamburger
// FaHamburger
// GiHamburgerMenu