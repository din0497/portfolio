import { Link } from "react-router-dom";
import img from "../../assets/brand.png";
import { Button, ButtonWrapper, Container, Img, TextWrapper } from "./style";
const ShortIntro = () => {
  return (
    <Container>
      <TextWrapper>
        <h1 style={{ lineHeight: "1.5", fontSize: "3rem" }}>
          I'm Rivojiddin. I'm a developer and <br /> blogger working at Genius
          ID.
        </h1>
        <ButtonWrapper>
          <Link to="/blog">
            <Button type={true}>Read my blogs</Button>
          </Link>
          <Button>Download CV</Button>
        </ButtonWrapper>
      </TextWrapper>

      <Img src={img} />
    </Container>
  );
};

export default ShortIntro;
