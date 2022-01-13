import { Title } from "../../commons/Title";
import { blogs } from "../Home/Home";
import { BlogGrid } from "./style";

const Blog = () => {
  return (
    <BlogGrid>
      {blogs.map((blog, i) => {
        return (
          <Blog key={i} img={blog.img} title={blog.title} date={blog.date} />
        );
      })}
    </BlogGrid>
  );
};

export default Blog;
