import { Title } from "../../commons/Title";
import { blogs } from "../Home/Home";
import { BlogGrid } from "./style";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div>
      <Title>BLOG</Title>
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
