import styled from 'styled-components';


export const BlogGrid = styled.div`
 display: grid;
 grid-template-columns: 30% 30% 30%;
 row-gap:20px;
 column-gap:20px;
 justify-content: center;
 margin-top: 30px;
 @media only screen and (max-width: 800px) {
    grid-template-columns: 45% 45%; 
  }
  @media only screen and (max-width: 436px) {
    grid-template-columns: 90%; 
  }
`

export const BlogCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CreateContainer = styled.div`
`