import { newdate, Posting } from "./style";
import { useState, useRef, useEffect } from "react";
import { AddonsContainer, Textarea, TextareaStory, Addons } from "./style";
import { MdAddAPhoto, MdOutlineTitle } from "react-icons/md";
import { Link } from "react-router-dom";

const CreatePost = ({ setBlog }) => {
  const reader = new FileReader();
  const inputRef = useRef();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [file, setFile] = useState();
  const [img, setImg] = useState()
  const [arr, setArr] = useState()

  const getTitle = (e) => setTitle(e.target.value);
  const getText = (e) => setText(e.target.value);
  const getImage = (e) => setFile(e.target.files[0]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImg(null);
    }
  },[file]);

  const clickHandler = () => {
    let paragraph = [];


    reader.onload = () => {
    setImg(reader.result)
    }
    reader.readAsDataURL(file);
    console.log(img);
    setBlog( 
      (prev) => [
      ...prev,
      { title: title, text: text, img: img , date: newdate },
    ]);
  };
  return (
    <Posting>
      <AddonsContainer>
        <input
          ref={inputRef}
          hidden={true}
          onChange={getImage}
          accept="image/*"
          type="file"
        />
        <Addons onClick={() => inputRef.current.click()}>
          <MdAddAPhoto />
          <h5>Add photo</h5>
        </Addons>
        <Addons>
          <MdOutlineTitle />
          <h5>Add subtitle</h5>
        </Addons>
        <h5 onClick={clickHandler}><Link to='/blog'>Publish</Link></h5>
      </AddonsContainer>
      <Textarea onChange={getTitle} placeholder="Title…" />
      {/* <Textarea size='S' placeholder="Enter subtitle(Optional)" /> */}
      <TextareaStory onChange={getText} placeholder="Tell your story…" />
    </Posting>
  );
};

export default CreatePost;
