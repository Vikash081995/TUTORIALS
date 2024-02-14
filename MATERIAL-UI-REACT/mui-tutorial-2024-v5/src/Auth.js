import React, { useState } from "react";
import { Box, Typogrpahy, TextField, Button } from "@mui/material";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignup(true);
    setInputs({ name: "", email: "", password: " " });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc"
            }
          }}
        >
          <Typogrpahy
            margin="normal"
            variant="h2"
            padding={3}
            textAlign="center"
          >
            {isSignup ? "Sign up" : "Login"}
          </Typogrpahy>
          {isSignup && (
            <>
              <TextField
                name="name"
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                type={"text"}
                variant="outlined"
                placeholder="Name"
              />
              <TextField
                name="email"
                value={inputs.email}
                onChange={handleChange}
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
              />
              <TextField
                value={inputs.password}
                onChange={handleChange}
                name="password"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
              />
            </>
          )}
          <Button variant="contained" type="submit">
            {" "}
            {isSignup ? "Sign up" : "Login"}
          </Button>
          <Button variant="contained" onClick={resetState}>
            Change to {isSignup ? "Login" : "Sign up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
