import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [repeatedPassword, setRepeatedPassword] = useState("");

  const onChangePasswordRepeat = (e) => {
    setRepeatedPassword(e.target.value);
  };
  const onChange = (event) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/1.0/users", user);
  };
  let disabled = true;
  if (user.password && repeatedPassword) {
    disabled = user.password !== repeatedPassword;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input id="username" onChange={onChange} />
        <label htmlFor="email">E-mail</label>
        <input id="email" onChange={onChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={onChange} />
        <label htmlFor="password">Password Repeat</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={onChangePasswordRepeat}
        />
        <button disabled={disabled} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
