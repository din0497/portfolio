import { useEffect } from "react";
import { BlogCartContainer } from "./style";
import Blog from "./Blog";
import useHttp from "../hooks/use-http";
import { getAllBlogs } from "../lib/api";
import { BlogItem } from "./BlogSkelton";

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
    return (
      <BlogCartContainer>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </BlogCartContainer>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!blogs || blogs.length === 0)) {
    return <p>no blogs found</p>;
  }

  return (
    <>
      <BlogCartContainer>
        {blogs.slice(0, 3).map((blog, i) => {
          return (
            <Blog
              key={i}
              id={blog.id}
              img={blog.img}
              title={blog.title}
              date={blog.date}
            />
          );
        })}
      </BlogCartContainer>
    </>
  );
};

export default RecentBlogs;
