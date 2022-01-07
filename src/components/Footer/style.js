import styled from "styled-components";

export const FootContainer = styled.footer`
  max-width: 1100px;
  width: 90%;
  border-top: grey 1px solid;
`;
export const FootNavsWrapper = styled.ul`
  text-align: start;
  gap: 5px;
`;

export const FootNav = styled.li`
  list-style-type: none;
  color: rgb(75 85 99);
  margin-bottom: 1em;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgb(75 85 99);
`;

export const A = styled.a`
 text-decoration:none;
 color: rgb(75 85 99);
`
