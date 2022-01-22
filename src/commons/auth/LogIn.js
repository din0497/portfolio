import { useRef } from "react";

const LogIn = () => {
  const email = useRef();
  const password = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCuv7S3nkRWrslZ9D_7Nkqe0LtFOjYxTEE",
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
        return res.json()
      } else {
        return res.json().then((data) => {
       let errorMessage = "Authentication failed";

       throw new Error(errorMessage);
        });
      }
    }).then((data) => {
        console.log(data)
    })
    .catch((err) => {
        alert(err.message)
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" ref={email} />
      <label htmlFor="password">Password</label>
      <input type="password" ref={password} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
