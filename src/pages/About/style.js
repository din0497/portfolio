import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Article = styled.article`
  padding: 0 36px;
`;

export const Paragraph = styled.p`
  max-width: 56rem;
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

export const Line = styled.span`
 border-top: grey dashed 1px;
 width: 100px;
 margin: 0 10px;
`

