import { BlogCart, Img, Title } from "./style";
import img from "../assets/img1.jpg";
const Blog = () => {
  return (
    <BlogCart>
      <Img src={img} />
      <Title>
        How to Dynamically Create Open Graph Images with Cloudinary and Next.js
      </Title>
      <span>Januar 5, 2022</span>
    </BlogCart>
  );
};

export default Blog;
