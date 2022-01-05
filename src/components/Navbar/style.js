import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 25px;
`;

export const Header = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 35px;
  justify-content: space-between;
`;

export const Nav = styled.li`
  color: grey!important;
  font-size: 1.125rem;
  align-items: center;
  cursor: pointer;
  padding: 4px 15px;
  &:hover {
    background-color:#e8edea;
    border-radius: 70px;
  }
`;

export const Brand = styled.div`
  font-size: 1.5rem;
`;
