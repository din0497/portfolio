import { BlogCart, Img, Title } from "./style";
const Blog = ({ img, title, date }) => {
  console.log();
  return (
    <BlogCart>
      <Img src={img} />
      <div>
        <Title>{title}</Title>
        <span style={{marginLeft:'5px'}}>{date}</span>
      </div>
    </BlogCart>
  );
};

export default Blog;
