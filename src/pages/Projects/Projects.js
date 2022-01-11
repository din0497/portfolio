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
          text="LoadFetcher is a multi loadboard search platform. It merges multiple loadboards and makes it easy to see all the loads from different loadboards without logging in each of the loadboards."
        />
        <Back>
          <Img src={loadfetcher} />
        </Back>
      </DesWrapper>
      <DesWrapper>
        <Description
          link="https://borbaraka.netlify.app/"
          title="Borbaraka"
          text="BorBaraka is Korean Company located in Seoul. I built
           this web site with using React, Styled
          Components, React Router. Teck stack: TailwindCss,
          using React, Styled Components, React Router."
        />
        <Back>
          <Img src={project} />
        </Back>
      </DesWrapper>
      <DesWrapper>
        <Description
          link="https://bill-hotel-site.netlify.app/"
          title="Bill Hotel"
          text="Bill Hotel is hotel reservetion app for booking, reserving and browsing hotel rooms. I built it using Ract, React hooks, CSS "
        />
        <Back>
          <Img src={hotel2} />
        </Back>
      </DesWrapper>
    </ProductContainer>
  );
};

export default Projects;
