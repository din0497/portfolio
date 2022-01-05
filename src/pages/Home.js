import Blog from "../commons/Blog";
import ShortIntro from "../components/Home/ShortIntro";
import { BlogCartContainer } from "./style";

const Home = () => {
  return (
    <>
      <ShortIntro />
      <BlogCartContainer>
        <Blog />
        <Blog />
        <Blog />
      </BlogCartContainer>
    </>
  );
};

export default Home;
