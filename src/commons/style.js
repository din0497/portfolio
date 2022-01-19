import styled from "styled-components";

export const BlogCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 81%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: 50vh;
  max-height: 300px;
  border-radius: 13px;
`;

export const Title = styled.h3`
 text-align:left;
`;

export const RecentBlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6em;
  text-align: left;
  /* align-items: left; */
  /* border: red solid 1px; */
`;

export const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-left: 38px;
 
`;

export const BlogCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  gap: 5px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background:${({ type }) => type && "#334155"};
  border-radius: 30px;
  color: ${({ type }) => (type ? "white" : "#4b5563")};
  outline: none;
  border:none;
  font-weight: 500;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  cursor: pointer;
}
`;

export const H2 = styled.h2`
  max-width: 472px;
  text-align: left;
  @media only screen and (max-width: 500px) {
    width: 300px }
`;
