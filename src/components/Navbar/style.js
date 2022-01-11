import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  /* width: 40%; */
  gap: 15px;
  list-style-type: none;
  margin-top: 25px;
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

export const Header = styled.header`
  max-width: 1100px;
  width: 90%;
  display: flex;
  align-items: center;
  height: 50px;
  /* padding: 0 35px; */
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  animation: nav-load 300ms ease-in;

@keyframes nav-load {
  0%{
      transform: translateY(-100%);
  }

  100%{
    transform: translateY(0%);

  }
}
`;

export const Nav = styled.li`
  color: grey ;
  font-size: 1.125rem;
  align-items: center;
  padding: 4px 15px;
  &:hover {
    background-color: #e8edea;
    border-radius: 70px;
  }
`;

export const Brand = styled.div`
  font-size: 1.5rem;
  color: rgb(20 184 166);
  font-weight: 600;
`;
