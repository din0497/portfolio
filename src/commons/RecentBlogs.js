import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  MiniContainer,
  BlogCartContainer,
  Button,
  RecentBlogsContainer,
  H2,
} from "./style";
import Blog from "./Blog";
import useHttp from '../hooks/use-http'
import {getAllBlogs} from '../lib/api'

export const RecentBlogs = () => {
  const {
    sendRequest,
    status,
    data: blogs,
    error,
  } = useHttp(getAllBlogs, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!blogs || blogs.length === 0)) {
    return <p>no blogs found</p>;
  }
   


  return (
    <RecentBlogsContainer>
      <MiniContainer>
        <H2>I love to share my knowledge by writing.</H2>
        <p style={{ color: "grey", maxWidth: "353px", textAlign: "left" }}>
          Check out a few of my most recent publishings.
        </p>
      </MiniContainer>
      <BlogCartContainer>
        {blogs.reverse().slice(0,3).map((blog, i) => {
          return (
            <Blog key={i} id={blog.id} img={blog.img} title={blog.title} date={blog.date} />
          );
        })}
      </BlogCartContainer>
      <div style={{ padding: "4em 0 0 1em", maxWidth: "300px" }}>
        <Link to="/blog">
          <Button type="true">See All articles</Button>
        </Link>
      </div>
    </RecentBlogsContainer>
  );
};

export default RecentBlogs;
