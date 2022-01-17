import { useEffect } from "react";
import { Title } from "../../commons/Title";
import { BlogGrid } from "./style";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import useHttp from "../../hooks/use-http";
import { getAllBlogs } from "../../lib/api";

const Blogs = () => {
  const {
    sendRequest,
    status,
    data: blogs,
    error,
  } = useHttp(getAllBlogs, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  // console.log(blogs)
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>BLOG</Title>
      <CreateBlog />
      <BlogGrid>
        {blogs.map((blog, i) => {
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
      </BlogGrid>
    </div>
  );
};

export default Blogs;
