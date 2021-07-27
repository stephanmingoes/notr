import React, { useState, useEffect } from "react";
import BookIcon from "@material-ui/icons/Book";
import { AppBar, Grid, Avatar, Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import * as actions from "../../actionTypes/actionTypes";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: actions.LOGOUT });
    dispatch({ type: actions.FORMAT });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      var token = user.token;
    }

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 100 > new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className="logo">
      <Grid container justify="space-between">
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <a href="/">
            <BookIcon />
            Notr
          </a>
        </Grid>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          {user ? (
            <div className="user">
              <div>
                <Avatar alt={user.result.username}>
                  {user.result.username.charAt(0)}
                </Avatar>
              </div>
              <div>
                <p>{user.result.username}</p>
              </div>
              <div>
                <Button
                  onClick={logout}
                  className="header_btn"
                  variant="contained"
                >
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <div className="user">
              <Button
                className="header_btn"
                variant="contained"
                onClick={() => history.push("/auth")}
              >
                Login
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
