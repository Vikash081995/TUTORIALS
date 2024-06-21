import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";

const SignUpPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [apiProgress, setApiProgress] = useState(false);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [signUpSuccess, setSignUpSSuccess] = useState(false);
  const [errors, setErrors] = useState({});

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    try {
      const response = await axios.post("/api/1.0/users", user);
      if (response) {
        setSignUpSSuccess(true);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setErrors({ errors: error.response.data });
      }
      setApiProgress(false);
    }
  };
  let disabled = true;
  if (user.password && repeatedPassword) {
    disabled = user.password !== repeatedPassword;
  }

  return (
    <div>
      {!signUpSuccess && (
        <form onSubmit={onSubmit} data-testid="form-sign-up">
          <h1>Sign Up</h1>
          <Input
            id="username"
            label="Username"
            onChange={onChange}
            help={errors.username}
          />
          <Input
            id="email"
            label="E-mail"
            onChange={onChange}
            help={errors.email}
          />
          <Input
            id="password"
            label="Passowrd"
            type="password"
            onChange={onChange}
            help={errors.password}
          />

          <label htmlFor="password">Password Repeat</label>
          <input
            id="passwordRepeat"
            type="password"
            onChange={onChangePasswordRepeat}
          />
          <button disabled={disabled || apiProgress} type="submit">
            {apiProgress && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Sign Up
          </button>
        </form>
      )}

      {signUpSuccess && (
        <div className="alert alert-success mt-3">
          Please check your e-mail to activate your account
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
