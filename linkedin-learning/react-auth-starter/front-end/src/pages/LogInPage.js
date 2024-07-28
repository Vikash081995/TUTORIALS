import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  const onLogInHandler = async () => {
    console.log("login not impemented yet");
  };

  return (
    <div className="content-container">
      <h1>Login</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        value={emailValue}
        placeholder="someone@gmail.com"
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        value={passwordValue}
        placeholder="password"
        type="password"
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInHandler}>
        Login
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot password
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account ? Register
      </button>
      Don
    </div>
  );
};

export default LogInPage;
