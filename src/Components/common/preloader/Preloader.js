import loading from "../../../assets/loading.gif";
import React from "react";

let Preloader = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <img src={loading} />
    </div>
  );
};

export default Preloader;
