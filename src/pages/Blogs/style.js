import styled from "styled-components";

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  row-gap: 20px;
  column-gap: 20px;
  justify-content: center;
  margin-top: 30px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 45% 45%;
  }
  @media only screen and (max-width: 436px) {
    grid-template-columns: 90%;
  }
`;

export const BlogCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CreateContainer = styled.div`
  width: 90%;
  color: rgba(51, 51, 51);
  background-color: rgba(245, 247, 250);
  border: rgba(229, 231, 235) solid 1px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
`;

export const Posting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Textarea = styled.textarea`
  color: rgba(51, 51, 51);
  line-height: 1.375;
  font-weight: 700;
  font-size: ${({size}) => size === 'S' ? '1rem': '1.875rem' };
  /* padding-left: 1rem;
  padding-right: 1rem; */
  background-color: transparent;
  appearance: none;
  resize: none;
  width: 100%;
  margin-bottom: 1.25rem;
  @media only screen and (max-width: 450px) {
   width: 90%;
  }
  outline:none;
  border:none;
}
`;

export const TextareaStory = styled.textarea`
  color: rgba(51, 51, 51);
  line-height: 1.375;
  font-size: 1rem;
  padding-bottom: 3rem;
  resize: none;
  min-height: 100vh;
  width:100%;
  outline:none;
  border:none;
`;

export const Addons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
color: grey;
cursor: pointer;
gap:5px;
`;

export const AddonsContainer = styled.div`
 display:flex;
 flex-direction: row;
 gap:10px;
`;

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

export let newdate = year + "/" + month + "/" + day;