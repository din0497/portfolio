import styled from "styled-components";

export const Img = styled.img`
  width: 233px;
  transition: width 2s, height 2s, transform 2s;
  &:hover {
    transform: scale(2, 2);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 1060px) {
    flex-direction: column-reverse;
  }
`;
export const TextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  max-width: 500px;
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

export const Container = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  position: relative;
  @media only screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

export const Gradient = styled.div`
 @media only screen and (max-width: 1060px) {
    display: none;
  }
  left:0;
  mix-blend-mode: multiply;
  background-image: radial-gradient(
    closest-side,
    #2dd4bf,
    rgba(233, 168, 2, 0)
  );
  border-radius: 40rem;
  width: 426px;
  height: 500px;
  position: absolute;
  z-index: -1;
  -webkit-animation:spin 10s linear infinite;
    -moz-animation:spin 10s linear infinite;
    animation:spin 10s linear infinite;
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
    
`;

export const IntroH1 = styled.h1`
  line-height: 1.5;
  font-size: 2.5rem;
  text-align: left;
  @media only screen and (max-width: 1000px) {
    margin: 20px;
    text-align: center;
  }
`;
