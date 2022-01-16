import { useParams } from "react-router-dom";
import { AboutContainer, Article, Paragraph } from "../About/style";
import { PostImg, PostTitle } from "./style";

const Post = ({ blogs }) => {
  const params = useParams();
  const blog = blogs.find((blog) => blog.id === params.id);
  console.log(blog.id, blog.title, blog.text);
  return (
    <AboutContainer>
      <PostTitle>{blog.title}</PostTitle>
      <span
        style={{
          marginTop: "-40px",
          marginBottom: "35px",
          color: "grey",
          fontSize: "1.5rem",
        }}
      >
        {blog.date}
      </span>
      <PostImg src={blog.img} />
      <Article>
        {blog.text.map((p, i) => {
          return <Paragraph key={i}>{p}</Paragraph>;
        })}
      </Article>
    </AboutContainer>
  );
};

export default Post;
