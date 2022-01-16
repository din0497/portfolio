import { Title } from "../../commons/Title";
import { BlogGrid } from "./style";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";

const Blogs = ({blogs}) => {

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Title>BLOG</Title>
      <CreateBlog/>
   { blogs.length !== 0 ? <BlogGrid>
        {blogs
          .map((blog) => {
            return (
              <Blog
                key={blog.id}
                id={blog.id}
                img={blog.img}
                title={blog.title}
                date={blog.date}
              />
            );
          })
          .reverse()}
      </BlogGrid> : <p>no data yet</p> }
    </div>
  );
};

export default Blogs;
