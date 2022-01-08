import styled from "styled-components";

export const BlogCartContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 max-width: 100%;
 min-width: 100%;
 width: 100%;
 gap: 5px;

 @media only screen and (max-width: 600px) {
   flex-direction: column;

  }
`