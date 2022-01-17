import { useEffect } from "react";
import { Title } from "../../commons/Title";
import { BlogGrid, SkeltonGrid } from "./style";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import useHttp from "../../hooks/use-http";
import { getAllBlogs } from "../../lib/api";
import { BlogItem } from "../../commons/BlogSkelton";

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
  { status === 'pending'?    
          (
            <SkeltonGrid>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </SkeltonGrid>
          )
          
          : <BlogGrid>
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
      </BlogGrid> }
    </div>
  );
};

export default Blogs;
