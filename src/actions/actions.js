import * as actions from "../actionTypes/actionTypes";
import * as api from "../api/api";

export const getTask = () => async (dispatch) => {
  try {
    dispatch({ type: actions.START_LOADING });
    const { data } = await api.getTask();
    dispatch({
      type: actions.GET_TASK,
      payload: data,
    });

    dispatch({ type: actions.STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (taskData) => async (dispatch) => {
  try {
    const { data } = await api.createTask(taskData);
    dispatch({
      type: actions.CREATE_TASK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await api.deleteTask(taskId);
    dispatch({
      type: actions.DELETE_TASK,
      payload: taskId,
    });
  } catch (error) {
    console.log(error);
  }
};
