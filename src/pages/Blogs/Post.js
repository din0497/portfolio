import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AboutContainer, Article, Paragraph } from "../About/style";
import { PostImg, PostTitle } from "./style";
import useHttp from "../../hooks/use-http";
import { getSingleBlog } from "../../lib/api";

const Post = () => {
  const params = useParams();

  const { id } = params;

  const { sendRequest, status, data: blog, error } = useHttp(getSingleBlog);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>No blog found</p>;
  }

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
