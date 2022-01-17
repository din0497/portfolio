import ShortIntro from "../../components/Home/ShortIntro";
import img1 from "../../assets/img1.jpg";
import img from "../../assets/img.jpg";
import { RecentBlogs } from "../../commons/RecentBlogs";
import { Button, H2, MiniContainer, RecentBlogsContainer } from "../../commons/style";
import { Link } from "react-router-dom";

export let blogs = [
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
      <RecentBlogsContainer>
        <MiniContainer>
          <H2>I love to share my knowledge by writing.</H2>
          <p style={{ color: "grey", maxWidth: "353px", textAlign: "left" }}>
            Check out a few of my most recent publishings.
          </p>
        </MiniContainer>
        <RecentBlogs />
        <div style={{ margin:'auto', paddingTop:'4rem', maxWidth: "300px" }}>
        <Link to="/blog">
          <Button type="true">See All articles</Button>
        </Link>
      </div>
      </RecentBlogsContainer>
    </>
  );
};

export default Home;
