import { Img, Title } from "../../commons/style";
import { BlogCart } from "./style";
import { Link } from "react-router-dom";
const Blog = ({ img, title, date, id, type }) => {
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
          <span style={{ marginLeft: "5px", marginTop: "10px", color: "grey" }}>
            {date}
            <span style={{ color: "chocolate" }}>   #{type}</span>
          </span>
          <Title>
            <Link
              onClick={() => window.scrollTo(0,0)}
              style={{ textDecoration: "none", color: "black" }}
              to={`/blog/${id}`}
            >
              {title}
            </Link>
          </Title>
        </div>
      </BlogCart>
    </div>
  );
};

export default Blog;
