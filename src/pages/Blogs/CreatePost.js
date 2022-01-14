import { Posting } from "./style";
import { AddonsContainer, Textarea } from "./style";
const CreatePost = () => {
  return (
    <Posting>
      <AddonsContainer></AddonsContainer>
      <Textarea maxlength="150" placeholder="Title…" />
      <Textarea placeholder="Tell your story…"/>
    </Posting>
  );
};

export default CreatePost;
