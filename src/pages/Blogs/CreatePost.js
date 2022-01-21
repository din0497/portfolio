import { Demo, fullDate, Posting, Tag } from "./style";
import { useState, useRef, useEffect } from "react";
import { AddonsContainer, Textarea, TextareaStory, Addons } from "./style";
import { MdAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addBlog } from "../../lib/api";
import "../../App.css";
import ClockLoader from "react-spinners/ClockLoader";
import { storage } from "../../base";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref } from "@firebase/storage";

const CreatePost = () => {
  const { sendRequest, status } = useHttp(addBlog);
  const history = useNavigate();
  const inputRef = useRef();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState();
  const [prog, setProg] = useState(0);
  const [name, getName] = useState(0);
  const [link, setLink] = useState(null);
  const [type, setType] = useState("regular");

  const getTitle = (e) => setTitle(e.target.value);
  const getText = (e) => setText(e.target.value);
  const getImage = (e) => {
    setImg(e.target.files[0]);
    getName(e.target.files[0].name);
  };
  const getTagHandler = (e) => setType(e.target.value);

  useEffect(() => {
    if (img) {
      const storageRef = ref(storage, `/files/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProg(prog);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => setLink(url));
        }
      );
    }
  }, [img, name]);

  useEffect(() => {
    if (status === "completed") {
      history("/blog");
    }
  }, [status, history]);

  const clickHandler = () => {
    console.log(link)
    if (link === null || title === "" || text === "") {
      alert("Please upload file or wait until uploading complete!");
      return;
    }

    let paragraph = [];
    let split = text.split("\n\n");
    split.forEach(function (item) {
      paragraph.push(item);
    });

    sendRequest({
      type: type,
      title: title,
      img: link,
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
          <h5>
            {" "}
            {prog > 0 ? (
              <span style={{ color: "chocolate" }}>{`uploading ${prog}%`}</span>
            ) : (
              "Add photo"
            )}
          </h5>
        </Addons>
        <Addons>
          <Tag
            placeholder="add your tag"
            type="text"
            onChange={getTagHandler}
          />
        </Addons>
        <Addons>
          <h5 className="publish" onClick={clickHandler}>
            {" "}
            {status === "pending" ? "Publishing..." : "Publish"}{" "}
          </h5>
          {status === "pending" && (
            <ClockLoader color="rgb(20 184 166)" size={15} />
          )}
        </Addons>
      </AddonsContainer>
      <Demo src={link} />
      <Textarea onChange={getTitle} placeholder="Title…" />
      <TextareaStory onChange={getText} placeholder="Tell your story…" />
    </Posting>
  );
};

export default CreatePost;
