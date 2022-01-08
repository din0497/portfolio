import Blog from "../../commons/Blog";
import ShortIntro from "../../components/Home/ShortIntro";
import { BlogCartContainer } from "../Home/style";
import img1 from "../../assets/img1.jpg";
import img from "../../assets/img.jpg";
import { Button } from "../../components/Home/style";
import { Link } from "react-router-dom";

let blogs = [
  {
    img: img1,
    title:
      "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
    date: "January 6, 2021",
  },
  {
    img: img,
    title:
      "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
    date: "January 5, 2021",
  },
  {
    img: img,
    title:
      "How to Dynamically Create Open Graph Images with Cloudinary and Next.js",
    date: "January 5, 2021",
  },
];

const Home = () => {
  return (
    <>
      <ShortIntro />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <BlogCartContainer>
          {blogs.map((blog, i) => {
            return (
              <Blog
                key={i}
                img={blog.img}
                title={blog.title}
                date={blog.date}
              />
            );
          })}
        </BlogCartContainer>
        <div style={{ margin: "60px 0 0 26px" }}>
          <Link to="/blog">
            <Button type="true">See All articles</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
