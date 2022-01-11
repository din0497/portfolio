import { Title } from "../../commons/Title";
import Description from "./Description";
import { ProductContainer, Img, DesWrapper, Back } from "./style";
import project from "../../assets/project.png";
import loadfetcher from "../../assets/loadfetcher.png";
import hotel2 from "../../assets/hotel2.png";

const Projects = () => {
  return (
    <ProductContainer>
      <Title>PROJECTS</Title>
      <h1 style={{ padding: "0 8px" }}>A selection of my favorite works.</h1>
      <DesWrapper>
        <Description
          link="https://loadfetcher.com/"
          title="LoadFetcher"
          text="Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!"
        />
        <Back>
          <Img src={loadfetcher} />
        </Back>
      </DesWrapper>
      <DesWrapper>
        <Description
          link="https://borbaraka.netlify.app/"
          title="Borbaraka"
          text="Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!"
        />
        <Back>
          <Img src={project} />
        </Back>
      </DesWrapper>
      <DesWrapper>
        <Description
          link="https://bill-hotel-site.netlify.app/"
          title="Bill Hotel"
          text="Pomegradient is a web-based gradient solutiuon currently in beta that allows you to find, save and craft gradients with a creative community!"
        />
        <Back>
          <Img src={hotel2} />
        </Back>
      </DesWrapper>
    </ProductContainer>
  );
};

export default Projects;
