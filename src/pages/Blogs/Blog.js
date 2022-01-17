import { Img, Title } from "../../commons/style";
import { BlogCart } from "./style";
import { Link } from "react-router-dom";
const Blog = ({ img, title, date, id }) => {
  return (
    <div>
      <BlogCart>
        <Img src={img} loading="lazy" />
        <div
          style={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title>{title}</Title>
          <span style={{ marginLeft: "5px", color: "grey" }}>{date}</span>
        </div>
        <Link to={`/blog/${id}`}>read more</Link>
      </BlogCart>
    </div>
  );
};

export default Blog;
