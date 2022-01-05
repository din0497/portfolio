import { Link } from "react-router-dom";
import img from "../../assets/brand.png";
import {
  Button,
  ButtonWrapper,
  Container,
  Img,
  MiniContainer,
  TextWrapper,
  Wrapper,
} from "./style";
const ShortIntro = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <h1
            style={{
              lineHeight: "1.5",
              fontSize: "2.5rem",
            }}
          >
            I'm Rivojiddin. I'm a developer and <br/>blogger working at Genius
            ID.
          </h1>
          <ButtonWrapper>
            <Link to="/blog">
              <Button type={true}>Read my blogs</Button>
            </Link>
            <Link to="#">
              <Button>Download CV</Button>
            </Link>
          </ButtonWrapper>
        </TextWrapper>
        <Img src={img} />
      </Wrapper>
      <MiniContainer>
        <h2>I love to share my knowledge by writing.</h2>
        <p style={{ color: "grey" }}>
          Check out a few of my most recent publishings.
        </p>
      </MiniContainer>
    </Container>
  );
};

export default ShortIntro;
