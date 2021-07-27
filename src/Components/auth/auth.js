import React, { useState } from "react";
import { Button, Paper, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signup, signin } from "../../actions/auth";
const auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((preval) => ({ ...preval, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (
        credentials.username.trim() &&
        credentials.email.trim() &&
        credentials.password.trim()
      ) {
        dispatch(signup(credentials, history));
      } else {
        alert("Fields cannot be empty");
      }
    } else {
      if (credentials.email.trim() && credentials.password.trim()) {
        dispatch(signin(credentials, history));
      } else {
        alert("Fields cannot be empty");
      }
    }

    setCredentials({ username: "", email: "", password: "", password2: "" });
  };

  return (
    <div className="auth_div">
      <Paper className="auth_paper">
        <form>
          <h2>{isSignUp ? "Sign up" : "Sign in"}</h2>

          {isSignUp ? (
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="USERNAME"
              value={credentials.username}
            />
          ) : null}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="EMAIL"
            value={credentials.email}
          />
          <div className="password_div">
            {" "}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="PASSWORD"
              value={credentials.password}
            />
            <InputAdornment className="password_visibility">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          </div>
          {isSignUp ? (
            <input
              type="password"
              name="password2"
              onChange={handleChange}
              placeholder="CONFIRM PASSWORD"
              value={credentials.password2}
            />
          ) : null}

          <Button
            type="submit"
            onClick={onSubmit}
            className="auth_btn"
            variant="contained"
          >
            {isSignUp ? "Sign up" : "Sign in"}
          </Button>

          <p onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have account? Sign in"
              : "Dont have an account? Sign up"}
          </p>
        </form>
      </Paper>
    </div>
  );
};

export default auth;
