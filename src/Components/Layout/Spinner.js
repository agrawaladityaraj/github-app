import React from "react";
import SpinnerImg from "./Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerImg}
        alt="Spinner"
        style={{ height: "100px", width: "100px" }}
      />
    </>
  );
};

export default Spinner;
