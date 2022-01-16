import { CreateContainer } from "./style";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  return (
    <Link
      style={{
        textDecoration: "none",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      to="create"
    >
      <CreateContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "gray",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "10px 12px",
              border: "rgba(229,231,235) solid 1px",
              borderRadius: "50%",
            }}
          >
            <BsPencil size={20} />
          </div>
          <h3 style={{width: '180px'}}>Create a blog</h3>
        </div>
      </CreateContainer>
    </Link>
  );
};

export default CreateBlog;
