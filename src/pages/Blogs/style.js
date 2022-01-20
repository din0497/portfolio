import styled from "styled-components";
import "../../index.css";
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

export const SkeltonGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

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
  width: 80%;
  color: rgba(51, 51, 51);
  background-color: rgba(245, 247, 250);
  border: rgba(229, 231, 235) solid 1px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  padding: 0 30px;
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
  font-size: ${({ size }) => (size === "S" ? "1rem" : "1.875rem")};
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
  outline: none;
  border: none;
`;

export const TextareaStory = styled.textarea`
  color: rgba(51, 51, 51);
  line-height: 1.375;
  font-size: 1rem;
  padding-bottom: 3rem;
  resize: none;
  min-height: 100vh;
  width: 100%;
  outline: none;
  border: none;
`;

export const Addons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: grey;
  cursor: pointer;
  gap: 5px;
`;

export const AddonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const PostImg = styled.img`
  max-width: 59rem;
  height: auto;
  margin-left: -30px;
  max-height: 26rem;
  @media only screen and (max-width: 1050px) {
    margin-left: 0;
  }
  @media only screen and (max-width: 800px) {
    max-width: 21rem;
  }
`;

export const PostTitle = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-family: "Lora", serif;
  font-family: "Mochiy Pop P One", sans-serif;
  font-weight: 400;
  padding: 27px;
  @media only screen and (max-width: 500px) {
    text-align: left;
  }
`;

export const Demo = styled.img`
  max-width: 60%;
  min-width: 70%;
  height: auto;
  max-height: 250px;
  border-radius: 13px;
`;

export const Tag = styled.input`
  width: 80px;
  border: none;
  outline: none;
  color: gray;
  font-weight: 700;
`;

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date().getDate();
let mon = month[new Date().getMonth()];
let year = new Date().getFullYear();

export let fullDate = `${mon} ${date}, ${year}`;
