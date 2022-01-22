import { useRef } from "react";

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuv7S3nkRWrslZ9D_7Nkqe0LtFOjYxTEE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        //   ...
      } else {
         return res.json().then(data => {
              console.log(data)
          })
      }
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input type="name" ref={name} />
      <label htmlFor="email">Email</label>
      <input type="email" ref={email} />
      <label htmlFor="password">Password</label>
      <input type="password" ref={password} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
