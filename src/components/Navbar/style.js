import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 50px;
  list-style-type: none;
  margin-left: 100px;
  margin-top: 25px;
`;

export const Header = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  /* justify-content: space-evenly; */
`;

export const Nav = styled.li`
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
