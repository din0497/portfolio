import { BlogCart, Img, Title } from "./style";
const Blog = ({ img, title, date }) => {
  console.log();
  return (
    <BlogCart>
      <Img src={img} loading="lazy" />
      <div>
        <Title>{title}</Title>
        <span style={{ marginLeft: "5px", color: "grey" }}>{date}</span>
      </div>
    </BlogCart>
  );
};

export default Blog;
// GiHamburger
// FaHamburger
// GiHamburgerMenu