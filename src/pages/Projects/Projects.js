import { Title } from "../../commons/Title";
import Description from "./Description";
import { ProductContainer, Img, DesWrapper } from "./style";
import project from "../../assets/project.png";

const Projects = () => {
  return (
    <ProductContainer>
      <Title>PROJECTS</Title>
      <h1>A selection of my favorite works.</h1>
      <DesWrapper>
        <Description />
        <Img src={project} />
      </DesWrapper>
      <DesWrapper>
        <Description />
        <Img src={project} />
      </DesWrapper>
      <DesWrapper>
        <Description />
        <Img src={project} />
      </DesWrapper>
    </ProductContainer>
  );
};

export default Projects;
