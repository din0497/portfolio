import { Title } from "../../commons/Title";
import { AboutContainer, Article, Line, MeSection, Paragraph } from "./style";
import me from "../../assets/me.jpg";
import { Me } from "./style";

const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT ME</Title>
      <Article>
        <h1>Here`s my story</h1>
        <Paragraph>
          I’m Braydon, a developer, creative coder, blogger and self-proclaimed
          designer who specializes in front-end development. My mission is to
          translate user-focussed designs into pixel-perfect websites or
          applications that run blazing fast.
        </Paragraph>
        <Paragraph>
          I’m currently working as a senior full-stack engineer at Cognizant
          where I help architect and develop full-stack RESTful microservices,
          train and prepare developers for delivery, and assist in leading the
          front-end practice in a lab-based working environment.
        </Paragraph>
        <Paragraph>
          Before Cognizant, I worked as a UI Developer for projekt202 helping
          craft design systems and building reusable component libraries for
          multi-million dollar companies.
        </Paragraph>
      </Article>
      <MeSection>
        <Me src={me} />
        <Article>
          <Paragraph>
            In a past life, I was an indie mobile developer making mobile games
            for iOS and Android, with one of my games outselling Angry Birds.
          </Paragraph>
          <Paragraph>
            You can find me on Twitter where I share tech-related tidbits and
            build in public, or you can follow me on GitHub. I often write about
            my findings on my blog and create cool things over on CodePen. I
            also help run a mediocre podcast.
          </Paragraph>
        </Article>
      </MeSection>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "37px",
        }}
      >
        <h1>Work Experience</h1>
        <Paragraph>
          Here's a brief rundown of my most recent experiences.
        </Paragraph>
        <section style={{ display: "flex", flexDirection: "row", alignItems:'center'}}>
          <div>Company</div>
          <Line />
          <div>Full-stack 2012-now</div>
        </section>
      </section>
    </AboutContainer>
  );
};

export default About;
