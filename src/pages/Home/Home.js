import ShortIntro from "../../components/Home/ShortIntro";
import img1 from "../../assets/img1.jpg";
import img from "../../assets/img.jpg";
import { RecentBlogs } from "../../commons/RecentBlogs";

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
      <RecentBlogs />
    </>
  );
};

export default Home;
