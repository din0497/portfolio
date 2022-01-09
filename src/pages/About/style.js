import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Article = styled.article`
  padding: 0 36px;
`;

export const Paragraph = styled.p`
  max-width: 65rem;
  font-size: 18px;
  text-align: start;
  color: gray;
`;

export const Me = styled.img`
  width: 170px;
  border-radius: 24px;
  @media only screen and (max-width: 800px) {
   width: 337px;
  }
}
`;

export const MeSection = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 56rem;
  padding-left: 37px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Line = styled.div`
  border-bottom: grey dashed 1px;
  width: 100%;
  margin: 0 10px;
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 65px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Work = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`
