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
`;

export const Textarea = styled.textarea`
  color: rgba(51, 51, 51);
  line-height: 1.375;
  font-weight: 700;
  font-size: 1.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  appearance: none;
  resize: none;
  width: 100%;
  margin-bottom: 1.25rem;
  margin-top: 0.5rem;
  /* outline:none; */
  /* border:none; */
}
`;
export const Addons = styled.div``;

export const AddonsContainer = styled.div``;
