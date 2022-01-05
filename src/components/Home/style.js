import styled from "styled-components";

export const Img = styled.img`
  border-radius: 100px;
  /* box-shadow: 5px 10px 18px #888888; */
  width: 233px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  
  @media only screen and (max-width: 1060px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 690px) {
    margin-left: 166px;
  }
`;
export const TextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  @media only screen and (max-width: 660px) {
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
