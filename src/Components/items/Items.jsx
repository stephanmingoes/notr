import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { getTask, deleteTask } from "../../actions/actions";

function Items() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask());
  }, [getTask]);
  const { tasks, isLoading } = useSelector((state) => state.tasks);

  if (isLoading) return <CircularProgress className="circ-pro" />;
  return tasks ? (
    <div>
      {" "}
      {tasks.map((content) => (
        <div key={content._id} className="note">
          <h1>{content.title}</h1>
          <p>{content.note}</p>
          <div className="date">
            {content.date} {content.time}
          </div>
          <button
            onClick={() => {
              dispatch(deleteTask(content._id));
            }}
            type="submit"
          >
            <DeleteRoundedIcon />
          </button>
        </div>
      ))}
    </div>
  ) : null;
}

export default Items;
