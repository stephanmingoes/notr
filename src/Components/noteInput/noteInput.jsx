import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { useDispatch } from "react-redux";
import { createTask } from "../../actions/actions";
function NewNote() {
  const [item, setItem] = useState({ title: "", note: "" });
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  function handleChange(event) {
    const { value, name } = event.target;
    setItem((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function UpdateTimeAndDate() {
    const newTime = new Date().toLocaleTimeString();
    const newDate = new Date().toDateString();
    setTime(newTime);
    setDate(newDate);
  }
  function UpdateTimeAndDateAgain() {
    setInterval(UpdateTimeAndDate, 1000);
  }
  return (
    <div className="new-note">
      {UpdateTimeAndDateAgain()}
      <input
        disabled={!user}
        autoComplete="off"
        value={item.title}
        onChange={handleChange}
        name="title"
        type="text"
        placeholder={user ? "Title" : "Login to take a note"}
      ></input>

      <textarea
        disabled={!user}
        value={item.note}
        onChange={handleChange}
        name="note"
        type="text"
        placeholder={user ? "Take a note..." : "Login to take a note"}
      ></textarea>
      <p className="live-time-and-date">
        {time} {date}
      </p>

      <Zoom in={true}>
        <Fab
          disabled={!user}
          onClick={(event) => {
            const taskData = {
              ...item,
              time: new Date().toLocaleTimeString(),
              date: new Date().toDateString(),
            };
            dispatch(createTask(taskData));
            setItem({ title: "", note: "" });
          }}
        >
          <AddRoundedIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default NewNote;
