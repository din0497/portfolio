import { Button } from "../../commons/style";
import { ButtonWrap, DesContainer, ProjectText } from "./style";

const Description = ({ title, text }) => {
  return (
    <DesContainer>
      <h2 style={{ maxWidth: "22rem", textAlign: "start" }}>{title}</h2>
      <ProjectText>{text}</ProjectText>
      <ButtonWrap>
        <Button type="true"> Visit {title}</Button>
      </ButtonWrap>
    </DesContainer>
  );
};
export default Description;
