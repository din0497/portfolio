import { useEffect } from "react";
import { Title } from "../../commons/Title";
import { BlogGrid, SkeltonGrid } from "./style";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import useHttp from "../../hooks/use-http";
import { getAllBlogs } from "../../lib/api";
import { BlogSk } from "../../commons/BlogSkelton";

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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>BLOG</Title>
      <CreateBlog />
      {status === "pending" ? (
        <SkeltonGrid>
          <BlogSk />
          <BlogSk />
          <BlogSk />
          <BlogSk />
          <BlogSk />
          <BlogSk />
        </SkeltonGrid>
      ) : status === "completed" && (!blogs || blogs.length === 0) ? (
        <p style={{paddingBottom: '131px'}}>no blogs found</p>
      ) : error ? (
        <p style={{paddingBottom: '131px'}}>{error}</p>
      ) : (
        <BlogGrid>
          {blogs.map((blog, i) => {
            return (
              <Blog
                key={i}
                id={blog.id}
                img={blog.img}
                title={blog.title}
                date={blog.date}
                type={blog.type}
              />
            );
          })}
        </BlogGrid>
      )}
    </div>
  );
};

export default Blogs;
