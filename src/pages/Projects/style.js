import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DesContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 30px;
`;
export const DesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 50px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectText = styled.div`
  max-width: 22rem;
  text-align: start;
  color: gray;
`;

export const Img = styled.img`
  width: 320px;
  height: 280px;
  position: absolute;
  right: 40px;
  bottom: 0;
  border-radius: 10px 10px 0px 0px;
  transition: width 2s, height 2s, transform 2s;
  &:hover {
    transform: scale(2, 2);
  }
`;

export const Back = styled.div`
  background-color: whitesmoke;
  width: 400px;
  height: 320px;
  position: relative;
  border-radius: 15px 15px 0px 0px;
`;

export const ButtonWrap = styled.div`
text-align:start;
`
