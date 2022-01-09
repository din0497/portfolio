import { Link } from "react-router-dom";
import {
  MiniContainer,
  BlogCartContainer,
  Button,
  RecentBlogsContainer,
  H2,
} from "./style";
import Blog from "./Blog";
import { blogs } from "../pages/Home/Home";

export const RecentBlogs = () => {
  return (
    <RecentBlogsContainer>
      <MiniContainer>
        <H2>I love to share my knowledge by writing.</H2>
        <p style={{ color: "grey", maxWidth: "353px", textAlign: "left" }}>
          Check out a few of my most recent publishings.
        </p>
      </MiniContainer>
      <BlogCartContainer>
        {blogs.map((blog, i) => {
          return (
            <Blog key={i} img={blog.img} title={blog.title} date={blog.date} />
          );
        })}
      </BlogCartContainer>
      <div style={{ padding: "4em 0 0 3em", maxWidth: "300px" }}>
        <Link to="/blog">
          <Button type="true">See All articles</Button>
        </Link>
      </div>
    </RecentBlogsContainer>
  );
};

export default RecentBlogs;
