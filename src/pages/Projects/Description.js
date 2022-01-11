import { Button } from "../../commons/style";
import { DesContainer, ProjectText } from "./style";

const Description = ({ title, text }) => {
  return (
    <DesContainer>
      <h2 style={{ maxWidth: "22rem", textAlign: "start" }}>{title}</h2>
      <ProjectText>{text}</ProjectText>
      <Button type="true"> Visit Loadfetcher</Button>
    </DesContainer>
  );
};
export default Description;
