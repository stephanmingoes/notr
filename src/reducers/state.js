import * as actions from "../actionTypes/actionTypes";

const reducer = (state = { isLoading: true, tasks: [] }, action) => {
  switch (action.type) {
    case actions.GET_TASK:
      return { ...state, tasks: [...action.payload] };
    case actions.CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case actions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case actions.START_LOADING:
      return { ...state, isLoading: true };
    case actions.STOP_LOADING:
      return { ...state, isLoading: false };

    case actions.FORMAT:
      return { isLoading: false, task: [] };
    default:
      return state;
  }
};

export default reducer;
