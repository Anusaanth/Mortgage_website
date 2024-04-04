import React from "react";
import { FcHome } from "react-icons/fc";
import Form from "./Form";

export const Calculator = (props) => {
  return (
    <div>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2 style={{ marginBottom: "0.5rem" }}>Mortgage Calculator</h2>{" "}
            {/* Adjust margin bottom */}
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "-15rem" }}>
        {" "}
        {/* Adjust margin top */}
        <div
          className="App container"
          style={{ maxWidth: 500, margin: "1rem auto" }}
        >
          <Form />
        </div>
      </div>
    </div>
  );
};
