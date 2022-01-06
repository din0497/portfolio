import Blog from "../commons/Blog";
import ShortIntro from "../components/Home/ShortIntro";
import { BlogCartContainer } from "./style";
import img1 from "../assets/img1.jpg";
import img from "../assets/img.jpg";
import { Button } from "../components/Home/style";

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
      <div style={{ display: "flex", flexDirection: "column", alignItems:'start'}}>
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
        <div >
          <Button type="true">See all articles</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
