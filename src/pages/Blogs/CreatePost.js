import { newdate, Posting } from "./style";
import { useState } from "react";
import { AddonsContainer, Textarea, TextareaStory, Addons } from "./style";
import { MdAddAPhoto, MdOutlineTitle } from "react-icons/md";
import img from '../../assets/img.jpg';

const CreatePost = ({setBlog}) => {
 const [title, setTitle] = useState();
 const [story, setStory] = useState();

 const getTitle = (e) => setTitle(e.target.value);
 const getStory = (e) => setStory(e.target.value);

 const clickHandler = () => {
   setBlog(prev => [...prev, {title: title, story: story, img: img, date: newdate}])
 }
  return (
    <Posting>
      <AddonsContainer>
        <Addons>
          <MdAddAPhoto />
          <h5>Add photo</h5>
        </Addons>
        <Addons>
          <MdOutlineTitle />
          <h5>Add subtitle</h5>
        </Addons>
        <h5 onClick={clickHandler}>Publish</h5>
      </AddonsContainer>
      <Textarea onChange={getTitle} placeholder="Title…" />
      {/* <Textarea size='S' placeholder="Enter subtitle(Optional)" /> */}
      <TextareaStory onChange={getStory} placeholder="Tell your story…" />
    </Posting>
  );
};

export default CreatePost;
