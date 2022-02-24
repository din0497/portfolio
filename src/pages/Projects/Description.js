import { Button } from "../../commons/style";
import { A } from "../../components/Footer/style";
import { ButtonWrap, DesContainer, ProjectText } from "./style";

const Description = ({ title, text, link }) => {
  return (
    <DesContainer>
      <h2 style={{ maxWidth: "22rem", textAlign: "center" }}>{title}</h2>
      <ProjectText>{text}</ProjectText>
      <ButtonWrap>
        <A href={link} target="_blank">
          <Button type="true"> Visit {title}</Button>
        </A>
      </ButtonWrap>
    </DesContainer>
  );
};
export default Description;
