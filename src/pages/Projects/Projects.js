import { Title } from "../../commons/Title";
import Description from "./Description";
import { ProductContainer, Img, DesWrapper, Back } from "./style";
import project from "../../assets/project.png";
import loadfetcher from "../../assets/loadfetcher.png";

const Projects = () => {
  return (
    <ProductContainer>
      <Title>PROJECTS</Title>
      <h1 style={{ padding:'0 8px'}}>A selection of my favorite works.</h1>
      <DesWrapper>
        <Description
          title="LoadFetcher"
          text="Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!"
        />
        <Back>
          <Img src={loadfetcher} />
        </Back>
      </DesWrapper>
      <DesWrapper>
        <Description
          title="Borbaraka"
          text="Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!"
        />
        <Back>
          <Img src={project} />
        </Back>
      </DesWrapper>
    </ProductContainer>
  );
};

export default Projects;
