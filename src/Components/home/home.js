import Items from "../items/Items";
import NewNote from "../noteInput/noteInput";

import React from "react";

const home = () => {
  return (
    <div className="main">
      <NewNote />
      <Items />
    </div>
  );
};

export default home;
