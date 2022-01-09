import { Link } from "react-router-dom";
import img from "../../assets/brand.png";
import {
  Button,
  ButtonWrapper,
  Container,
  Gradient,
  Img,
  IntroH1,
  TextWrapper,
  Wrapper,
} from "./style";
const ShortIntro = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <IntroH1>
            I'm <span style={{ color: "rgb(20 184 166)" }}>Rivojiddin</span>.
            I'm a developer and <br />
            blogger working at Genius ID.
          </IntroH1>
          <ButtonWrapper>
            <Link to="/blog">
              <Button type="true">Read my blogs</Button>
            </Link>
            <Link to="#">
              <Button>Download CV</Button>
            </Link>
          </ButtonWrapper>
        </TextWrapper>
        <Img src={img} />
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default ShortIntro;
