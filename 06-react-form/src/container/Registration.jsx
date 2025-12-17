import React, { useRef } from "react";

const Registration = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" name="fullname" id="fullname" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password"ref={passwordRef} />
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Registration;
