import { Title } from "../../commons/Title";
import {Link} from 'react-router-dom'
import {
  AboutContainer,
  Article,
  MeSection,
  Paragraph,
} from "./style";
import me from "../../assets/me.jpg";
import { Me } from "./style";
import RecentBlogs from "../../commons/RecentBlogs";
import { RecentBlogsContainer, MiniContainer,H2, Button } from "../../commons/style";


const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT ME</Title>
      <Article>
        <h1>Here`s my story</h1>
        <Paragraph>
          I`m Rivojiddin, a developer, creative coder, blogger and
          self-proclaimed designer who specializes in frontend development. My
          mission is to translate user-focussed designs into pixel-perfect
          websites that run blazing fast.
        </Paragraph>
        <Paragraph>
          I`m currently working as a frontend engineer at Genius Id where I help
          architect, develop and test frontend parts and assist in leading the
          front-end practice in a lab-based working environment.
        </Paragraph>
        <Paragraph>
          Before Genius Id, I freelanced as a Frontend developer for Borbaraka
          helping people to ship cargos from South Korea to centeral Asia.
        </Paragraph>
      </Article>
      <MeSection>
        <Me src={me} />
        <Article>
          <Paragraph>
            Currently, I am a senior student at Sejong University in South
            Korea. I like to code things from scratch, and enjoy bringing ideas
            to life in the browser.
          </Paragraph>
          <Paragraph>
            Since beginning my journey as a web developer nearly a year ago,
            I've done remote work for small agencies, consulted for small-scale
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            problem at a time.
          </Paragraph>
        </Article>
      </MeSection>
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
    </AboutContainer>
  );
};

export default About;
