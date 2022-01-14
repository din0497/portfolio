import { Img, Title } from "../../commons/style";
import { BlogCart } from "./style";
const Blog = ({ img, title, date }) => {
  console.log();
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
      </BlogCart>
    </div>
  );
};

export default Blog;
