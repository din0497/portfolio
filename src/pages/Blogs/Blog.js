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
          <span style={{ marginLeft: "5px", color: "grey" }}>{date}</span>
          <Title><Link style={{textDecoration:'none',color:'black'}} to={`/blog/${id}`}>{title}</Link></Title>
        </div>
      </BlogCart>
    </div>
  );
};

export default Blog;
