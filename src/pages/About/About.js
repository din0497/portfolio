import { Title } from "../../commons/Title";
import { AboutContainer } from "./style";

const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT ME</Title>
      <h1>Here`s my story</h1>
      <p style={{ maxWidth: "887px", textAlign: "start", color: 'gray' }}>
        I’m Braydon, a developer, creative coder, blogger and self-proclaimed
        designer who specializes in front-end development. My mission is to
        translate user-focussed designs into pixel-perfect websites or
        applications that run blazing fast.
      </p>
      {/* <p>
        I’m currently working as a senior full-stack engineer at Cognizant where
        I help architect and develop full-stack RESTful microservices, train and
        prepare developers for delivery, and assist in leading the front-end
        practice in a lab-based working environment.
      </p>
      <p>
        Before Cognizant, I worked as a UI Developer for projekt202 helping
        craft design systems and building reusable component libraries for
        multi-million dollar companies.
      </p> */}
    </AboutContainer>
  );
};

export default About;
