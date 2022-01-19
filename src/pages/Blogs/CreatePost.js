import { fullDate, Posting } from "./style";
import { useState, useRef, useEffect } from "react";
import { AddonsContainer, Textarea, TextareaStory, Addons } from "./style";
import { MdAddAPhoto} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addBlog } from "../../lib/api";
import "../../App.css";
import ClockLoader from "react-spinners/ClockLoader";
import { Img } from "../../commons/style";

const CreatePost = () => {
  const { sendRequest, status } = useHttp(addBlog);
  const history = useNavigate();
  const reader = new FileReader();
  const inputRef = useRef();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [file, setFile] = useState();
  const [img, setImg] = useState();

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
  }, [file]);

  useEffect(() => {
    if (status === "completed") {
      history("/blog");
    }
  }, [status, history]);

  const clickHandler = () => {
    let paragraph = [];
    let split = text.split("\n\n");
    split.forEach(function (item) {
      paragraph.push(item);
    });
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
    sendRequest({
      title: title,
      img: img,
      text: paragraph,
      date: fullDate,
    });
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
        <h5 className="publish" onClick={clickHandler}> Publish </h5>
          {status === 'pending' && <ClockLoader color='rgb(20 184 166)' size={15} />}
        </Addons>
      </AddonsContainer>
      <Img src={img}/>
      <Textarea onChange={getTitle} placeholder="Title…" />
      <TextareaStory onChange={getText} placeholder="Tell your story…" />
    </Posting>
  );
};

export default CreatePost;
