import * as actions from "../actionTypes/actionTypes";
import * as api from "../api/api";

export const signin = (state, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(state);
    if (
      data.message === "User does not exist!" ||
      data.message === "Invalid Password" ||
      data.message === "Something went wrong, try again!"
    ) {
      alert(data.message);
    } else {
      dispatch({ type: actions.AUTH, data });
      history.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};
export const signup = (state, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(state);

    if (
      data.message === "User already exists!" ||
      data.message === "Passwords do not match" ||
      data.message === "Something went wrong, try again!"
    ) {
      alert(data.message);
    } else {
      dispatch({ type: actions.AUTH, data });
      history.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};
