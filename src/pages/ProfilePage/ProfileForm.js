import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-contex";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPassword = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = newPassword.current.value;
    console.log(authCtx.token)
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCuv7S3nkRWrslZ9D_7Nkqe0LtFOjYxTEE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assu
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
