import { Link } from "react-router-dom";
import img from "../../assets/brand.png";
import cv from "../../assets/CV_Rivojiddin Abdunazarov.pdf";
import "../../App.css";
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
            <Link to="/about">
              <Button className="button" type="true">
                More About me
              </Button>
            </Link>
            <Link to="#">
              <Button className="button">
                <a
                  href={cv}
                  download
                  style={{ textDecoration: "none", color: "#4b5563" }}
                >
                  Download CV
                </a>
              </Button>
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
