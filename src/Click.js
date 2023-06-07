import React from "react";
import Higher from "./Higher";
import "./App.css";

const Click = ({ count, add }) => {
  return (
    <div>
      <h1 className="main">HigherOrder:{count}</h1>
      <br />

      <h3 className="information">
       Higher order componet are used to reuse component funcional logic 
      </h3>
      <br />
      <div className="abc">
        <button className="button" onClick={add}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default Higher(Click);
