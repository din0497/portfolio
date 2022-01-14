import { Title } from "../../commons/Title";
import { blogs } from "../Home/Home";
import { BlogGrid } from "./style";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";

const Blogs = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Title>BLOG</Title>
      <CreateBlog />
      <BlogGrid>
        {blogs
          .map((blog, i) => {
            return (
              <Blog
                key={i}
                img={blog.img}
                title={blog.title}
                date={blog.date}
              />
            );
          })
          .reverse()}
      </BlogGrid>
    </div>
  );
};

export default Blogs;
