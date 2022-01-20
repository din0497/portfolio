import { BlogCart, Img, Title } from "./style";
import { Link } from "react-router-dom";
const Blog = ({ img, title, date, id, type }) => {
  console.log();
  return (
    <BlogCart>
      <Img src={img} loading="lazy" />
      <div>
        <span style={{ marginLeft: "5px", marginTop:'10px', color: "grey" }}>{date}  #{type}</span>
        <Title><Link style={{textDecoration:'none', color:'black'}} to={`/blog/${id}`}>{title}</Link></Title>
      </div>
      
    </BlogCart>
  );
};

export default Blog;
