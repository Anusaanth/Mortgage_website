import React from "react";
import { FcHome } from "react-icons/fc";
import Form from "./Form";
import "./calculator.css";

export const Calculator = (props) => {
  return (
    <div style={{ marginBottom: "200px" }}>
      <div id="portfolio" className="text-center">
        <div>
          <div className="section-title" style={{ marginBottom: "-60px" }}>
            <h2>Mortgage Calculator</h2>
          </div>
        </div>
      </div>
      <div className="card">
        <Form />
      </div>
    </div>
  );
};

{
  /* <div className="card">
        <div className="container" style={{ marginTop: "-15rem" }}>
          {" "}
          <div
            className="App container"
            style={{ maxWidth: 500, margin: "1rem auto" }}
          >
            <Form />
          </div>
        </div>
      </div> */
}
