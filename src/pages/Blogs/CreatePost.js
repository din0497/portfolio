import { Posting } from "./style";
import { AddonsContainer, Textarea, TextareaStory, Addons } from "./style";
import { MdAddAPhoto, MdOutlineTitle } from "react-icons/md";
const CreatePost = () => {
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
      </AddonsContainer>
      <Textarea placeholder="Title…" />
      <TextareaStory placeholder="Tell your story…" />
    </Posting>
  );
};

export default CreatePost;
