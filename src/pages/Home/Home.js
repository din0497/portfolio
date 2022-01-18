import ShortIntro from "../../components/Home/ShortIntro";
import { RecentBlogs } from "../../commons/RecentBlogs";
import { Button, H2, MiniContainer, RecentBlogsContainer } from "../../commons/style";
import { Link } from "react-router-dom";
import '../../App.css'



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
          <Button className="button" type="true">See All articles</Button>
        </Link>
      </div>
      </RecentBlogsContainer>
    </>
  );
};

export default Home;
