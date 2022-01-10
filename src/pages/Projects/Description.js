import { Button } from "../../commons/style";
import { DesContainer, ProjectText } from "./style";


const Description = () => {
  return (
    <DesContainer>
      <h2 style={{ maxWidth: "22rem", textAlign: "start" }}>LoadFetcher</h2>
      <ProjectText>
        Pomegradient is a web-based gradient solutiuon currently in beta that
        allows you to find, save and craft gradients with a creative community!
      </ProjectText>
      <Button type='true'> Visit Loadfetcher</Button>
    </DesContainer>
  );
};
export default Description;
