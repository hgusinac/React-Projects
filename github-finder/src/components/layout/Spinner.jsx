import React, { Fragment } from "react";
import spinner from "./assets/spinner.gif";

const Spinner = () => (
  <div>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </div>
);

export default Spinner;
